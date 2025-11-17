import { useState } from "react";
import MovieSearch from "./MovieSearch";
import StarRating from "./StarRating";
import ReviewComment from "./ReviwComment";
import ReviewSubmitButton from "./ ReviewSubmitButton";

export default function AddReviewForm({ onClose, onSubmit }) {
  const [selectMovie, setSelectedMovie] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    const newReview = {
      movie: selectMovie,
      rating,
      comment,
      createdAt: new Date().toISOString(),
    };

    onSubmit(newReview); // ★ App へレビューを渡す
    onClose(); // フォームを閉じる
  };

  return (
    <div>
      <h2>検索Form</h2>

      <MovieSearch onSelect={(movie) => setSelectedMovie(movie)} />

      {selectMovie && (
        <div>
          <h3>選択中の映画</h3>

          <p>タイトル : {selectMovie.title}</p>

          {/* 公開年 */}
          <p>公開年 : {selectMovie.release_date?.slice(0, 4) ?? "不明"}</p>

          {/* ポスター画像 */}
          <img
            src={
              selectMovie.poster_path
                ? `https://image.tmdb.org/t/p/w200${selectMovie.poster_path}`
                : "/no-image.png"
            }
            alt={selectMovie.title}
          />

          <h3>評価</h3>
          <StarRating value={rating} onChange={setRating} />

          <h3>コメント</h3>
          <ReviewComment value={comment} onChange={setComment} />

          {/*投稿ボタン */}
          <ReviewSubmitButton onClick={handleSubmit} />
        </div>
      )}

      <button onClick={onClose}>閉じる</button>
    </div>
  );
}
