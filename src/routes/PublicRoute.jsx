import { useQuery } from "@tanstack/react-query";
import { Navigate, Outlet } from "react-router-dom";
import api from "../api/api";

export const PublicRoute = ({ children }) => {
  const isToken = !!localStorage.getItem("accessToken");
  console.log(isToken);

  const { data, isLoading } = useQuery({
    queryKey: ["user", "logout"],
    queryFn: () => api.auth.getUser(),
    retry: false,
    enabled: isToken,
  });
  console.log(data, isLoading);
  if (isLoading) return <div>Loading...</div>;
  if (data) return <Navigate to="/" />;
  return (
    <div>
      {children}
      <Outlet />
    </div>
  );
};
