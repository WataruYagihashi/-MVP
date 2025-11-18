require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

// 追加：Knex ポスグレ接続
const knex = require("knex")({
  client: "pg",
  // 開発環境と本番環境で切り替える
  connection:
    process.env.NODE_ENV === "production"
      ? process.env.DATABASE_URL
      : {
          host: process.env.DB_HOST,
          port: process.env.DB_PORT,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
        },
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

//TMDB 検索 API
app.get("/api/search", async (req, res) => {
  const query = req.query.query;
  if (!query) return res.status(400).json({ error: "query is required" });

  const apiKey = process.env.TMDB_API_KEY;

  try {
    const fetchRes = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
        query
      )}&language=ja`
    );

    const data = await fetchRes.json();
    return res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "TMDB 接続失敗" });
  }
});

//映画データ保存 API
app.post("/api/movies", async (req, res) => {
  const { tmdb_id, title, poster_path, release_date, overview } = req.body;

  try {
    const existing = await knex("movies").where({ tmdb_id }).first();
    if (existing) return res.json(existing);

    const [movie] = await knex("movies")
      .insert({
        tmdb_id,
        title,
        poster_path,
        release_date,
        overview,
      })
      .returning("*");

    res.json(movie);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "映画の保存に失敗しました" });
  }
});

//レビュー保存 API
app.post("/api/reviews", async (req, res) => {
  const { movie_id, rating, comment } = req.body;

  try {
    const [review] = await knex("reviews")
      .insert({
        movie_id,
        rating,
        comment,
      })
      .returning("*");

    res.json(review);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "レビュー保存失敗" });
  }
});

//レビュー取得 API
app.get("/api/reviews", async (req, res) => {
  try {
    const reviews = await knex("reviews") //SELECT * FROM reviewsと同じ
      .join("movies", "reviews.movie_id", "movies.id") //映画テーブルとレビューを合体
      .select(
        //サーバが返すカラム
        "reviews.id",
        "reviews.rating",
        "reviews.comment",
        "reviews.created_at",
        "movies.title",
        "movies.poster_path",
        "movies.release_date"
      )
      .orderBy("reviews.created_at", "desc"); //レビューの投稿日時が新しい順番に並べ

    res.json(reviews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "レビュー取得失敗" });
  }
});

//静的ファイル
app.use(express.static(path.join(__dirname, "/public")));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
