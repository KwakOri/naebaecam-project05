import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import {
  StButton,
  StCategory,
  StCategoryItem,
  StDiv,
  StNav,
  StProfile,
  StTitle,
} from "./NavigationBar.styled";

export const NavigationBar = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("accessToken");
    api.setAccessToken("");
    alert("로그아웃되었습니다.");
    navigate("/login");
  };

  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => api.auth.getUser(),
  });

  return (
    <StNav>
      <StDiv>
        <StTitle>나만의 가계부</StTitle>
        <StCategory>
          <StCategoryItem
            onClick={() => {
              navigate("/home");
            }}
          >
            HOME
          </StCategoryItem>
          <StCategoryItem
            onClick={() => {
              navigate("/my-page");
            }}
          >
            MY PAGE
          </StCategoryItem>
        </StCategory>
      </StDiv>
      <StDiv>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <StProfile>
            <img src={user?.avatar} alt="" />
            <h3>{user?.nickname}</h3>
          </StProfile>
        )}
        <StButton onClick={logOut}>LOGOUT</StButton>
      </StDiv>
    </StNav>
  );
};
