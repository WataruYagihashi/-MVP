// ReviewList.jsx
import ReviewItem from "./ReviewItem";

export default function ReviewList({ reviews }) {
  if (reviews.length === 0) {
    return <p>まだレビューがありません</p>;
  }

  return (
    <div>
      {/* <h1>みんなのレビュー</h1> */}
      <div className="review-grid">
        {reviews.map((rev) => (
          <ReviewItem key={rev.id} review={rev} />
        ))}
      </div>
    </div>
  );
}
