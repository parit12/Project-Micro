import propTypes from "prop-types";

const InputField = ({ label, placeholder, type, name }) => (
  <div className="input-group">
    <label htmlFor={name}>{label}</label>
    <input type={type} id={name} placeholder={placeholder} name={name} />
  </div>
);

InputField.propTypes = {
  label: propTypes.string,
  placeholder: propTypes.string,
  type: propTypes.string,
  name: propTypes.string,
};
export default InputField;
