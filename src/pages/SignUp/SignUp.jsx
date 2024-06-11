import { useMutation } from "@tanstack/react-query";
import api from "../../api/api";
import { Input } from "../../components";
import useInputs from "../../hooks/useInputs";
import { StButton, StContainer, StForm, StTitle } from "./SignUp.styled";

export const SignUp = () => {
  const { mutateAsync: signUp } = useMutation({
    mutationFn: (formData) => api.auth.signUp(formData),
  });

  const [form, onChange] = useInputs({
    email: "",
    password: "",
    confirmPassword: "",
    nickname: "",
  });

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (
      !form.email ||
      !form.password ||
      !form.confirmPassword ||
      !form.nickname
    ) {
      alert("모든 항목을 입력해주세요.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    const result = await signUp(form);
    alert(result.message);
  };

  return (
    <StContainer>
      <StForm onSubmit={handleSignUp}>
        <StTitle>회원가입</StTitle>
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
        <Input
          value={form.confirmPassword}
          onChange={onChange}
          type={"password"}
          name={"confirmPassword"}
          label={"비밀번호 확인"}
          placeholder={"비밀번호를 다시 한 번 입력해주세요"}
        />
        <Input
          value={form.nickname}
          onChange={onChange}
          type={"text"}
          name={"nickname"}
          label={"닉네임"}
          placeholder={"닉네임을 입력해주세요"}
        />
        <StButton type="submit">회원가입</StButton>
        <StButton>돌아가기</StButton>
      </StForm>
    </StContainer>
  );
};
