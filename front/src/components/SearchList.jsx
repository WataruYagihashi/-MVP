// SearchList.jsx
import React, { useState } from "react";

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
      <button id="button" onClick={handleSearch}>
        検索
      </button>
    </div>
  );
}
