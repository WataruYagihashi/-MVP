// ReviewItem.jsx
export default function ReviewItem({ review }) {
  return (
    <div className="review-item">
      <h3>{review.movie.title}</h3>

      <div>
        <img
          src={`https://image.tmdb.org/t/p/w200${review.movie.poster_path}`}
          width="150"
        />
      </div>

      <p>評価：{review.rating} / 5</p>
      <p>{review.comment}</p>

      <small>{new Date(review.createdAt).toLocaleString()}</small>
    </div>
  );
}
