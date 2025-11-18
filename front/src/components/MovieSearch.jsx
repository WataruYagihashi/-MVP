import { useState } from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    ochre: {
      main: "#E3D026",
      contrastText: "#242105",
    },
  },
});

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
      <div class="search">
        <input
          id="input"
          type="text"
          placeholder="映画名を入力"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="ochre"
            sx={{ width: 100, height: 50, fontSize: "1.5rem" }}
            onClick={searchMovies}
          >
            検索
          </Button>
        </ThemeProvider>
      </div>
      <ul>
        {results.map((movie) => (
          <a href="#text">
            <li key={movie.id}>
              <button class="card" onClick={() => onSelect(movie)}>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                      : "/no-image.png"
                  }
                  alt={movie.title}
                  style={{
                    width: "100px",
                    marginRight: "12px",
                    borderRadius: "4px",
                  }}
                />
                <div>
                  <span id="title">
                    {movie.title}（{movie.release_date?.slice(0, 4) || "年不明"}
                    ）
                  </span>
                  <p id="overview">{movie.overview}</p>
                </div>
              </button>
            </li>
          </a>
        ))}
      </ul>
      <p id="text"></p>
    </div>
  );
}
