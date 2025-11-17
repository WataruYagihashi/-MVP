import { useState } from "react";

export default function MovieSearch({ onSelect }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchMovies = async () => {
    const res = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
    const data = await res.json();
    setResults(data.results || []);
  };

  return (
    <div>
      <h3>映画を検索</h3>

      <input
        type="text"
        placeholder="映画名を入力"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={searchMovies}>検索</button>

      <ul>
        {results.map((movie) => (
          <li key={movie.id}>
            <button onClick={() => onSelect(movie)}>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                    : "/no-image.png"
                }
                alt={movie.title}
                style={{
                  width: "80px",
                  marginRight: "12px",
                  borderRadius: "4px",
                }}
              />
              <span>
                {movie.title}（{movie.release_date?.slice(0, 4) || "年不明"}）
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
