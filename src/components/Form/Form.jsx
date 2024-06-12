/* eslint-disable react/prop-types */
import { Input } from "@components";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getDate, validateInputs } from "@utils";
import { useState } from "react";
import api from "../../api/api";
import { StButton, StForm } from "./Form.styled";

const Form = () => {
  const queryClient = useQueryClient();
  const {
    data: { id, nickname },
    isLoading,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => api.auth.getUser(),
  });

  const { mutateAsync: postRecord } = useMutation({
    mutationFn: (record) =>
      api.posts.postRecord({ ...record, accountId: id, nickname }),
  });

  const [inputs, setInputs] = useState({
    date: getDate(),
    category: "",
    cost: "",
    description: "",
  });

  const { date, category, cost, description } = inputs;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const isValid = validateInputs(inputs);
    if (!isValid.result) {
      if (isValid.errorType === "invalidDate") {
        setInputs((prev) => {
          return { ...prev, date: getDate() };
        });
      }
      return;
    }

    await postRecord(inputs);
    queryClient.invalidateQueries({ queryKey: ["records"] });

    setInputs({
      date: getDate(),
      category: "",
      cost: "",
      description: "",
    });
  };

  if (isLoading) return <div>Loading...</div>;
  return (
    <StForm onSubmit={handleFormSubmit}>
      <Input
        value={date}
        onChange={handleInputChange}
        type="text"
        name="date"
        label={"날짜"}
      />

      <Input
        value={category}
        onChange={handleInputChange}
        type="text"
        name="category"
        label={"항목"}
        placeholder={"지출항목"}
      />

      <Input
        value={cost}
        onChange={handleInputChange}
        type="number"
        name="cost"
        label={"금액"}
        placeholder={"지출 금액"}
      />

      <Input
        value={description}
        onChange={handleInputChange}
        type="text"
        name="description"
        label={"내용"}
        placeholder={"지출 내용"}
      />
      <StButton>저장</StButton>
    </StForm>
  );
};

export { Form };
