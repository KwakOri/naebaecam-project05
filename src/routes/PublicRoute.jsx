import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const isToken = !!localStorage.getItem("accessToken");
  console.log(isToken);

  // const { data, isLoading } = useQuery({
  //   queryKey: ["user"],
  //   queryFn: () => api.auth.getUser(),
  //   retry: false,
  //   enabled: isToken,
  // });

  // console.log(data, isLoading);

  if (isToken) return <Navigate to="/" />;
  // if (isLoading) return <div>Loading...</div>;
  // if (data) return <Navigate to="/" />;
  return (
    <div>
      {children}
      <Outlet />
    </div>
  );
};

// login이후 root에서 auth/login으로 접속하려고 시도하면 root로 redirect됨.
// 그 이후 logout을 하면, localStorage에 accessToken이 없는데 data에 정보가 들어있는 문제가 발생.
// public route에서는 token은 없지만 data가 있으니 "/"로 보내고
// private route에서는 token이 없으니 "login"으로 보내는 무한 리다이렉트 발생.
