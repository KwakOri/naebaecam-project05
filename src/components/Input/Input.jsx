/* eslint-disable react/prop-types */
import { StInput } from "./Input.styled";

const Input = ({ value, onChange, type, name, label, placeholder = "" }) => {
  return (
    <StInput>
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </StInput>
  );
};

export { Input };
