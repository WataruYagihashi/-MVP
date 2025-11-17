// ReviewSubmitButton.jsx
export default function ReviewSubmitButton({ disabled, onClick }) {
  return (
    <button disabled={disabled} onClick={onClick}>
      投稿する
    </button>
  );
}
