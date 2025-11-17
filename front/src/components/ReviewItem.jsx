export default function ReviewItem({ review }) {
  return (
    <div className="review-item">
      <h3>{review.title}</h3>

      <div>
        <img
          src={`https://image.tmdb.org/t/p/w200${review.poster_path}`}
          width="150"
          alt={review.title}
        />
      </div>

      <p>評価：{review.rating} / 5</p>
      <p>{review.comment}</p>

      <small>{new Date(review.created_at).toLocaleString()}</small>
    </div>
  );
}
