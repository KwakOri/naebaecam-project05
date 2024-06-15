import { SyncLoader } from "react-spinners";
import { StDiv, StTitle } from "./Loading.styled";

export const InputLoading = () => {
  return (
    <StDiv>
      <SyncLoader color="#2d2d2d" loading size={10} />
      <StTitle>Loading...</StTitle>
    </StDiv>
  );
};
