import Coin from "../../assets/gold-coin.gif";
import { StDiv, StImage, StTitle } from "./Loading.styled";

export const CustomLoading = () => {
  return (
    <StDiv>
      <StImage src={Coin} />
      <StTitle>Loading...</StTitle>
    </StDiv>
  );
};
