import { Outlet } from "react-router-dom";
import { NavigationBar } from "../components/NavigationBar";

import styled from "styled-components";

export const StDiv = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export const Layout = () => {
  return (
    <StDiv>
      <NavigationBar />
      <Outlet />
    </StDiv>
  );
};
