import { useState, useEffect } from "react";
import "./App.css";
import AddReviewForm from "./components/AddReviewForm";
import ReviewList from "./components/ReviewList";
import SearchList from "./components/SearchList";

function App() {
  const [page, setPage] = useState("home"); // "home" or "form"
  const [reviews, setReviews] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState(""); // 🔵検索語

  //初回レンダリング時に実行するuseEffect => サーバにレビュー一覧全部くれ！！
  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("レビュー取得失敗:", err));
  }, []);

  const handleAddReview = () => {
    fetch("/api/reviews")
      .then((res) => res.json())
      //reviewsステートの更新
      .then((data) => setReviews(data));

    setPage("home");
  };

  const filteredReviews =
    searchKeyword.trim() === ""
      ? reviews
      : reviews.filter((rev) =>
          rev.title.toLowerCase().includes(searchKeyword.toLowerCase())
        );

  return (
    <div>
      {/* ホーム画面 */}
      {page === "home" && (
        <div>
          <h1>映画レビューサイト(仮)</h1>

          <div class="homeAction">
            <SearchList onSearch={setSearchKeyword} />
            <button onClick={() => setPage("form")}>レビューを追加</button>
          </div>

          <ReviewList reviews={filteredReviews} />
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
