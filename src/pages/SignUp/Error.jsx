import { StError } from "./SignUp.styled";

export const Error = ({ error }) => {
  return <StError isError={!!error}>{error ? error : "OK!"}</StError>;
};
