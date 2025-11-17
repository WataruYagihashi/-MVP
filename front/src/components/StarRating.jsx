// components/StarRating.jsx
import React, { useState } from "react";

export default function StarRating({ value, onChange }) {
  const [hoverValue, setHoverValue] = useState(undefined);

  const stars = [1, 2, 3, 4, 5];

  // 星の表示ロジック
  const getStarColor = (index) => {
    // ホバーしている場合 → ホバーの値を優先
    if (hoverValue !== undefined) {
      return index <= hoverValue ? "#ffd700" : "#ccc";
    }
    // ホバーしていない → 現在のvalue（小数対応）
    return index <= Math.round(value) ? "#ffd700" : "#ccc";
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <div style={{ display: "flex", gap: "4px", cursor: "pointer" }}>
        {stars.map((star) => (
          <span
            key={star}
            style={{
              fontSize: "32px",
              color: getStarColor(star),
              transition: "color 0.2s",
            }}
            onClick={() => onChange(star)} // クリックで評価確定
            onMouseEnter={() => setHoverValue(star)} // ホバーで色変更
            onMouseLeave={() => setHoverValue(undefined)}
          >
            ★
          </span>
        ))}
      </div>

      {/* 数値表示（小数1桁） */}
      <span style={{ fontSize: "20px" }}>{value.toFixed(1)}</span>
    </div>
  );
}
