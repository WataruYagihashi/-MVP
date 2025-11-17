// ReviewList.jsx
import ReviewItem from "./ReviewItem";

export default function ReviewList({ reviews }) {
  if (reviews.length === 0) {
    return <p>まだレビューがありません</p>;
  }

  return (
    <div>
      <h2>レビュー一覧</h2>
      {reviews.map((rev, index) => (
        <ReviewItem key={index} review={rev} />
      ))}
    </div>
  );
}
