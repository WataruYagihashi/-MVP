import React from "react";

export default function ReviwComment({ value, onChange }) {
  return (
    <div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="レビューを書いてください"
        rows={5}
        style={{ width: "100%", padding: "8px" }}
      />
    </div>
  );
}
