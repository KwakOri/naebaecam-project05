import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";
import api from "../api/api";

export const PrivateRoute = ({ children }) => {
  const isToken = !!localStorage.getItem("accessToken");

  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => api.auth.getUser(),
    retry: false,
    enabled: isToken,
  });

  if (!isToken) return <Navigate to="/login" />;
  if (isLoading) return <div>Loading...</div>;
  if (!data) {
    localStorage.removeItem("accessToken");
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};
