import "./Button.css";

function Button({ text, onClick, type = "submit", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`common-btn ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;