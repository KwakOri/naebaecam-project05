import { SyncLoader } from "react-spinners";
import { StDiv, StTitle } from "./Loading.styled";

export const AuthLoading = () => {
  return (
    <StDiv>
      <SyncLoader color="#2d2d2d" loading size={60} margin={10} />
      <StTitle>Loading...</StTitle>
    </StDiv>
  );
};
