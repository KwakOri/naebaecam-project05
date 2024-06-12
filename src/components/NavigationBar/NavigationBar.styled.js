import styled from "styled-components";

export const StNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: #333;
  color: #fff;
`;

export const StButton = styled.button`
  padding: 10px 20px;
  height: 36px;
  background-color: #fff;
  color: #333;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;

export const StTitle = styled.h1`
  font-size: 24px;
  margin: 0;
  display: flex;
  align-items: center;
`;

export const StCategory = styled.div`
  display: flex;
  gap: 10px;
`;

export const StCategoryItem = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.$active ? "#fff" : "#333")};
  color: ${(props) => (props.$active ? "#333" : "#fff")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const StDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const StProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    overflow: hidden;
    object-fit: cover;
    height: 48px;
    width: 48px;
  }
  h3 {
    font-size: 24px;
    font-weight: 500;
  }
`;
