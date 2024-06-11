import styled from "styled-components";

export const StTitle = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 900;
`;

export const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StForm = styled.form`
  width: 400px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  border-radius: 20px;
  border: 1px solid #ddd;
`;

export const StButton = styled.button`
  width: 100%;
  height: 40px;
  background: #f1f1f1;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #ddd;
  }
`;
