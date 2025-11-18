import React from "react";
import ReviewList from "./ReviewList";

export default function SearchList() {
  return (
    <div>
      <input id="input" type="text" placeholder="映画名で検索" />
      <button>検索</button>
    </div>
  );
}
