import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import { Input } from "../../components";
import useInputs from "../../hooks/useInputs";
import { validateSignupInputs } from "../../utils/validation";
import { Error } from "./Error";
import { StButton, StContainer, StForm, StTitle } from "./SignUp.styled";

export const SignUp = () => {
  const navigate = useNavigate();
  const { mutateAsync: signUp } = useMutation({
    mutationFn: (formData) => api.auth.signUp(formData),
    onSuccess: (data) => {
      alert(data.message);
      navigate("/login");
    },
    onError: (error) => {
      alert(error.response.data.message);
    },
  });

  const [form, onChange] = useInputs({
    accountId: "",
    password: "",
    passwordConfirm: "",
    nickname: "",
  });
  const handleSignUp = async (e) => {
    e.preventDefault();
    const { result } = validateSignupInputs(form);
    if (!result) return;

    await signUp(form);
  };

  const { result: enabled, error } = validateSignupInputs(form);

  return (
    <StContainer>
      <StForm onSubmit={handleSignUp}>
        <StTitle>회원가입</StTitle>
        <div>
          <Input
            value={form.accountId}
            onChange={onChange}
            type={"text"}
            name={"accountId"}
            label={"아이디"}
            placeholder={"아이디를 입력해주세요"}
          />
          <Error error={error.accountId} />
        </div>
        <div>
          <Input
            value={form.password}
            onChange={onChange}
            type={"password"}
            name={"password"}
            label={"비밀번호"}
            placeholder={"비밀번호를 입력해주세요"}
          />
          <Error error={error.password} />
        </div>
        <div>
          <Input
            value={form.passwordConfirm}
            onChange={onChange}
            type={"password"}
            name={"passwordConfirm"}
            label={"비밀번호 확인"}
            placeholder={"비밀번호를 다시 한 번 입력해주세요"}
          />
          <Error error={error.passwordConfirm} />
        </div>
        <div>
          <Input
            value={form.nickname}
            onChange={onChange}
            type={"text"}
            name={"nickname"}
            label={"닉네임"}
            placeholder={"닉네임을 입력해주세요"}
          />
          <Error error={error.nickname} />
        </div>
        <StButton type="submit" disabled={!enabled}>
          {enabled ? "회원가입" : "빈칸을 모두 채워주세요!"}
        </StButton>
        <StButton
          onClick={() => {
            navigate("/login");
          }}
        >
          돌아가기
        </StButton>
      </StForm>
    </StContainer>
  );
};
