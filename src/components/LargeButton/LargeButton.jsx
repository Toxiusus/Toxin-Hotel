import "./LargeButton.scss";

function LargeButton() {
  return (
    <a href="/search-room">
      <button className="large btn-reset">
        <span>Подобрать номер</span>
      </button>
    </a>
  );
}

export default LargeButton;
