// SearchList.jsx
import React, { useState } from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    ochre: {
      main: "#FF9900",
      contrastText: "#242105",
    },
  },
});

export default function SearchList({ onSearch }) {
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    onSearch(keyword); // 親へ検索語を渡す
  };

  return (
    <div>
      <input
        id="input"
        type="text"
        placeholder="映画名で検索"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          // disabled={disabled}
          onClick={handleSearch}
          color="ochre"
          sx={{ width: 100, height: 50, fontSize: "1.5rem" }}
        >
          検索
        </Button>
        {/* <button id="button" onClick={handleSearch}>
          検索
        </button>  */}
      </ThemeProvider>
    </div>
  );
}
