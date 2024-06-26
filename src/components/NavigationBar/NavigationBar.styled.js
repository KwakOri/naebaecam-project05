import styled from "styled-components";

export const StNav = styled.nav`
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: #333;
  color: #fff;
`;

export const StButton = styled.button`
  padding: 0px 20px;
  height: 24px;
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
  font-weight: 900;
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
  background-color: ${({ $loc, $path }) => ($loc === $path ? "#fff" : "#333")};
  color: ${({ $loc, $path }) => ($loc === $path ? "#333" : "#fff")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: ${({ $loc, $path }) => ($loc === $path ? "900" : "400")};
`;

export const StDiv = styled.div`
  height: 60px;
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
    height: 36px;
    width: 36px;
    border-radius: 9px;
  }
  h3 {
    font-size: 18px;
    font-weight: 500;
  }
`;
