import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import { Input } from "../../components";
import useInputs from "../../hooks/useInputs";
import { StButton, StContainer, StForm, StTitle } from "./LogIn.styled";

export const LogIn = () => {
  const navigate = useNavigate();
  const { mutateAsync: LogIn } = useMutation({
    mutationFn: (formData) => api.auth.logIn(formData),
    onSuccess: (data) => {
      alert("로그인되었습니다");
      console.log(data.accessToken);
      localStorage.setItem("accessToken", data.accessToken);
      api.setAccessToken(data.accessToken);
      navigate("/");
    },
  });

  const [form, onChange] = useInputs({
    email: "",
    password: "",
  });

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      alert("모든 항목을 입력해주세요.");
      return;
    }
    await LogIn(form);
  };

  return (
    <StContainer>
      <StForm onSubmit={handleSignUp}>
        <StTitle>로그인</StTitle>
        <Input
          value={form.email}
          onChange={onChange}
          type={"email"}
          name={"email"}
          label={"이메일"}
          placeholder={"이메일을 입력해주세요"}
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
        <StButton>돌아가기</StButton>
      </StForm>
    </StContainer>
  );
};
