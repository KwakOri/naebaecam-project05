import { styled } from "styled-components";
/* eslint-disable react/prop-types */
import { Calendar, Form, SpendingList } from "@components/";
import { useMutation, useQuery } from "@tanstack/react-query";
import api from "../../api/api";
import { CustomLoading } from "../../components/CustomLoading";

const StDiv = styled.div``;

const Home = () => {
  const {
    data: { id, nickname },
    isLoading,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => api.auth.getUser(),
  });

  const { mutateAsync: postRecord, isPending: isPosting } = useMutation({
    mutationFn: (record) => {
      console.log(record, id, nickname);
      return api.posts.postRecord({
        ...record,
        nickname,
        accountId: id,
      });
    },
    onSuccess: () => {
      alert("작성이 완료되었습니다.");
    },
  });

  if (isPosting || isLoading) return <CustomLoading />;

  return (
    <StDiv>
      <Form postRecord={postRecord} />
      <Calendar />
      <SpendingList />
    </StDiv>
  );
};

export { Home };
