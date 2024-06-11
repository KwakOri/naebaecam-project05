import { Detail, Home } from "@pages";
import { createBrowserRouter } from "react-router-dom";
import { APITest } from "../pages/APITest";
import { LogIn } from "../pages/LogIn/LogIn";
import { SignUp } from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
  {
    path: "/apitest",
    element: <APITest />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
  {
    path: "log-in",
    element: <LogIn />,
  },
]);

export { router };
