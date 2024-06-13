import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import { AuthLoading } from "../../components/CustomLoading/AuthLoading";
import {
  PreviewDummy,
  PreviewImg,
  StButton,
  StContainer,
  StFileInput,
  StForm,
  StPreview,
  StTextInput,
  StTitle,
} from "./MyPage.styled";

export const MyPage = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const setPriviewAvatar = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const [previewImage, setPreviewImage] = useState("");
  const avatarRef = useRef(null);
  const nicknameRef = useRef(null);

  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      api.auth.getUser();
    },
  });

  useEffect(() => {
    nicknameRef.current.value = data.nickname;
    setPreviewImage(data.avatar);
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nickname", nicknameRef.current.value);
    formData.append("avatar", avatarRef.current.files[0]);

    const result = await api.users.updateProfile(formData);
    console.log(result);
    if (!result) return;
    queryClient.invalidateQueries("user");
    alert("변경 완료!");
    navigate("/");
  };

  if (isLoading) return <AuthLoading />;
  return (
    <StContainer>
      <StForm onSubmit={handleSubmit}>
        <StTitle>회원정보 수정</StTitle>
        <StTextInput>
          <label htmlFor="nickname">닉네임</label>
          <input
            ref={nicknameRef}
            type={"text"}
            name={"nickname"}
            id={"nickname"}
            placeholder={"닉네임을 입력해주세요"}
          />
        </StTextInput>
        <StFileInput>
          <label htmlFor="avatar">
            {previewImage ? "프로필 이미지 변경하기" : "프로필 이미지 추가하기"}
          </label>
          <StButton
            type="button"
            onClick={() => {
              setPreviewImage("");
            }}
          >
            삭제
          </StButton>
          <input
            ref={avatarRef}
            onChange={(event) => {
              setPriviewAvatar(event);
            }}
            type="file"
            accept="image/*"
            name="avatar"
            id="avatar"
          />
          <StPreview>
            {previewImage ? (
              <PreviewImg src={previewImage} alt="미리보기" />
            ) : (
              <PreviewDummy>미리보기</PreviewDummy>
            )}
          </StPreview>
        </StFileInput>

        <StButton type="submit">저장</StButton>
        <StButton
          type="button"
          onClick={() => {
            navigate("/");
          }}
        >
          돌아가기
        </StButton>
      </StForm>
    </StContainer>
  );
};
