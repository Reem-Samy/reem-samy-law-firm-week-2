import "./FormInput.css";

const FormInput = (props) => {
  return (
    <div className="form-field">
      <label className="form-label">
        {props.label}
      </label>

      <input
        className="form-control"
        type={props.type || "text"}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default FormInput;