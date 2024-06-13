import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import { Input } from "../../components";
import useInputs from "../../hooks/useInputs";

import { AuthLoading } from "../../components/CustomLoading/AuthLoading";
import { StButton, StContainer, StForm, StTitle } from "./LogIn.styled";

export const LogIn = () => {
  const navigate = useNavigate();
  const { mutateAsync: LogIn, isPending } = useMutation({
    mutationFn: (formData) => api.auth.logIn(formData),
    onSuccess: (data) => {
      console.log(data);
      alert("로그인되었습니다");
      localStorage.setItem("accessToken", data.accessToken);
      api.setAccessToken(data.accessToken);
      navigate("/");
    },
  });

  const [form, onChange] = useInputs({
    accountId: "",
    password: "",
  });

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!form.accountId || !form.password) {
      alert("모든 항목을 입력해주세요.");
      return;
    }
    LogIn(form);
  };
  console.log(isPending);
  if (isPending) return <AuthLoading />;

  return (
    <StContainer>
      <StForm onSubmit={handleSignUp}>
        <StTitle>로그인</StTitle>
        <Input
          value={form.accountId}
          onChange={onChange}
          type={"text"}
          name={"accountId"}
          label={"아이디"}
          placeholder={"아이디를 입력해주세요"}
        />
        <Input
          value={form.password}
          onChange={onChange}
          type={"password"}
          name={"password"}
          label={"비밀번호"}
          placeholder={"비밀번호를 입력해주세요"}
        />
        <StButton type="submit">로그인</StButton>
        <StButton
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입
        </StButton>
      </StForm>
    </StContainer>
  );
};
