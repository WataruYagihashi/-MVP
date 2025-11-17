import { useState } from "react";
import "./App.css";
import AddReviewForm from "./components/AddReviewForm";
import ReviewList from "./components/ReviewList";

function App() {
  const [page, setPage] = useState("home"); // "home" or "form"
  const [reviews, setReviews] = useState([]);

  const handleAddReview = (newReview) => {
    setReviews((prev) => [...prev, newReview]);
    setPage("home"); // 投稿後ホームに戻る
  };

  return (
    <div>
      {/* ホーム画面 */}
      {page === "home" && (
        <div>
          <h1>映画レビューサイト(仮)</h1>
          <button onClick={() => setPage("form")}>レビューを追加</button>

          <ReviewList reviews={reviews} />
        </div>
      )}

      {/* フォーム画面 */}
      {page === "form" && (
        <AddReviewForm
          onSubmit={handleAddReview}
          onClose={() => setPage("home")}
        />
      )}
    </div>
  );
}

export default App;
