// ReviewList.jsx
import ReviewItem from "./ReviewItem";

export default function ReviewList({ reviews }) {
  if (reviews.length === 0) {
    return <p>まだレビューがありません</p>;
  }

  return (
    <div>
      <h2>レビュー一覧</h2>
      <div className="review-grid">
        {reviews.map((rev) => (
          <ReviewItem key={rev.id} review={rev} />
        ))}
      </div>
    </div>
  );
}
