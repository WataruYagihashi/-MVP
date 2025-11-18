import React from "react";

export default function ReviewComment({ value, onChange }) {
  return (
    <div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="レビューを書いてください"
        rows={5}
        style={{ width: "80%", padding: "8px" }}
      />
    </div>
  );
}
