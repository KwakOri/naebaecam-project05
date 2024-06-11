import { useEffect } from "react";
import api from "../api/api";

export const APITest = () => {
  useEffect(() => {
    const signUp = async () => {
      const data = await api.auth.signUp();
      console.log(data);
    };
    signUp();
  }, []);
  return <div>APITest</div>;
};
