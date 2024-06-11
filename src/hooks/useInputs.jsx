import { useState } from "react";

const useInputs = (initialForm) => {
  const [form, setForm] = useState(initialForm);

  const handler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return [form, handler];
};

export default useInputs;
