import "./LargeButton.scss";

function LargeButton({text}) {
  return (
    <a href="/search-room">
      <button className="large btn-reset">
        <span>{text}</span>
      </button>
    </a>
  );
}

export default LargeButton;
