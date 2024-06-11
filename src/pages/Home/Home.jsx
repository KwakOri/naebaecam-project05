import { styled } from "styled-components";
/* eslint-disable react/prop-types */
import { Calendar, Form, SpendingList } from "@components/";
import { useEffect } from "react";
import api from "../../api/api";

const StDiv = styled.div``;

const Home = () => {
  // 유저 정보 확인 test 코드
  useEffect(() => {
    const getUser = async () => {
      const response = await api.auth.getUser();
      console.log(response);
    };
    getUser();
  }, []);

  return (
    <StDiv>
      <Form />
      <Calendar />
      <SpendingList />
    </StDiv>
  );
};

export { Home };
