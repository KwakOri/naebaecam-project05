import { Outlet } from "react-router-dom";
import { NavigationBar } from "../components/NavigationBar";

export const Layout = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
    </div>
  );
};
