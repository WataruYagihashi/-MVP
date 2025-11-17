require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/api/search", async (req, res) => {
  const query = req.query.query;

  if (!query) {
    return res.status(400).json({ error: "query is required" });
  }

  const apiKey = process.env.TMDB_API_KEY;

  try {
    const fetchRes = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
        query
      )}&language=ja`
    );

    const data = await fetchRes.json();
    return res.json(data); //フロントに映画リストを返す
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "TMDB 接続失敗" });
  }
});

app.use(express.static(path.join(__dirname, "/public")));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
