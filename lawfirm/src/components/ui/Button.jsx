import "./Button.css";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={`btn btn-${props.variant}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;