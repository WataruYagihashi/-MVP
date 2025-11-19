import StarRating from "./StarRating";
import { useState } from "react";

export default function ReviewItem({ review }) {
  const [expanded, setExpanded] = useState(false);

  const MAX_LENGTH = 30; // 何文字まで表示するか調整可

  const shortComment =
    review.comment.length > MAX_LENGTH
      ? review.comment.slice(0, MAX_LENGTH) + "..."
      : review.comment;

  return (
    <div
      className="review-card"
      style={{
        display: "flex",
        margin: "16px 0",
        border: "1px solid #ccc",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w300${review.poster_path}`}
        alt={review.title}
        style={{ width: "150px", objectFit: "cover" }}
      />
      <div style={{ padding: "12px", flex: 1 }}>
        <h3>{review.title}</h3>
        <p>{review.release_date?.slice(0, 4) ?? "年不明"}</p>
        <StarRating value={review.rating} readOnly={true} />
        <p className="comment">{expanded ? review.comment : shortComment}</p>
      </div>
    </div>
  );
}
