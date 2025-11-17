// SearchBar.jsx
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [keyword, setKeyword] = useState("");

  return (
    <div>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="映画タイトルを入力"
      />
      <button onClick={() => onSearch(keyword)}>検索</button>
    </div>
  );
}
