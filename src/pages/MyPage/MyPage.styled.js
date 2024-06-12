import styled from "styled-components";

export const StTitle = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 900;
`;

export const StContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
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

export const StTextInput = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  input {
    flex: 1;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
  }
`;

export const StFileInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    cursor: pointer;
    &:hover {
      background: #ddd;
    }
  }

  input {
    display: none;
  }
`;

export const StPreview = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 20px;
  box-sizing: border-box;
`;

export const PreviewImg = styled.img`
  width: 400px;
  border-radius: 20px;
  object-fit: cover;
`;

export const PreviewDummy = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 20px;
  background: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 900;
`;
