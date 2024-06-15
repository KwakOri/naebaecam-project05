import styled from "styled-components";

const StError = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 24px;
  font-size: 12px;
  color: ${(props) => (props.isError ? "red" : "green")};
`;

export const Error = ({ error }) => {
  return <StError isError={!!error}>{error ? error : "OK!"}</StError>;
};
