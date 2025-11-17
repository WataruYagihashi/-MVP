// SearchResults.jsx
export default function SearchResults({ results, onSelect }) {
  return (
    <div>
      {results.map((movie) => (
        <div
          key={movie.id}
          style={{
            border: "1px solid #ccc",
            margin: 10,
            padding: 10,
            cursor: "pointer",
          }}
          onClick={() => onSelect(movie)}
        >
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                : "/no-image.png"
            }
            alt={movie.title}
            style={{ width: 100 }}
          />
          <h3>{movie.title}</h3>
          <p>{movie.release_date?.slice(0, 4) ?? "不明"}</p>
          <p>{movie.overview?.slice(0, 200) ?? "概要なし"}</p>
        </div>
      ))}
    </div>
  );
}
