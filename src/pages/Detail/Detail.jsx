/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Input } from "@components";
import { useMutation, useQuery } from "@tanstack/react-query";
import { validateInputs } from "@utils";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api/api";
import { StBtns, StButton, StDiv, StForm } from "./Detail.styled";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    date: "",
    category: "",
    cost: "",
    description: "",
  });

  const { mutateAsync: overwriteRecord } = useMutation({
    mutationFn: async (inputs) => {
      const response = await api.posts.overwriteRecord(id, inputs);
      return response;
    },
  });

  const { mutateAsync: deleteRecord } = useMutation({
    mutationFn: async () => {
      const response = await api.posts.deleteRecord(id);
      return response;
    },
  });

  const { isLoading } = useQuery({
    queryKey: ["record"],
    queryFn: async () => {
      const response = await api.posts.getRecord(id);
      setInputs(response);
      return response;
    },
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };
  const handleModifyBtn = async (event) => {
    event.preventDefault();
    const isValid = validateInputs(inputs);
    if (!isValid.result) {
      return;
    }
    await overwriteRecord(inputs);
    alert("수정이 완료되었습니다");
    navigate("/home");
  };
  const handleDeleteBtn = async () => {
    await deleteRecord();

    alert("삭제가 완료되었습니다");
    navigate("/home");
  };
  const handleCancelBtn = () => {
    navigate("/home");
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <StDiv>
        <StForm>
          <Input
            value={inputs.date}
            onChange={handleInputChange}
            type="text"
            name="date"
            label={"날짜"}
          />

          <Input
            value={inputs.category}
            onChange={handleInputChange}
            type="text"
            name="category"
            label={"항목"}
          />

          <Input
            value={inputs.cost}
            onChange={handleInputChange}
            type="number"
            name="cost"
            label={"금액"}
          />

          <Input
            value={inputs.description}
            onChange={handleInputChange}
            type="text"
            name="description"
            label={"내용"}
          />
          <StBtns>
            <StButton type="submit" $type={"modify"} onClick={handleModifyBtn}>
              수정
            </StButton>
            <StButton type="button" $type={"delete"} onClick={handleDeleteBtn}>
              삭제
            </StButton>
            <StButton type="button" $type={"cancel"} onClick={handleCancelBtn}>
              취소
            </StButton>
          </StBtns>
        </StForm>
      </StDiv>
    </>
  );
};

export { Detail };
