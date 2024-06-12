import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import { StNav } from "./NavigationBar.styled";

export const NavigationBar = () => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("accessToken");
    api.setAccessToken("");
    alert("로그아웃되었습니다.");
    navigate("/auth/login");
  };

  return (
    <StNav>
      NavigationBar
      <button onClick={logOut}>LOGOUT</button>
    </StNav>
  );
};
