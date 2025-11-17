// SelectedMovieDetail.jsx
import { useState } from "react";
import StarRating from "./StarRating";

export default function SelectedMovieDetail({ movie, onAddReview }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    if (rating === 0) {
      alert("評価を入力してください");
      return;
    }
    onAddReview({
      movieId: movie.id,
      title: movie.title,
      rating,
      comment,
    });
    setRating(0);
    setComment("");
  };

  return (
    <div style={{ border: "1px solid #666", margin: 20, padding: 20 }}>
      <h2>{movie.title}</h2>
      <p>{movie.release_date?.slice(0, 10) ?? "公開日不明"}</p>
      <p>{movie.overview}</p>
      <StarRating value={rating} onChange={setRating} />
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="コメントを入力"
        rows={4}
        style={{ width: "100%" }}
      />
      <button onClick={handleSubmit}>レビュー追加</button>
    </div>
  );
}
