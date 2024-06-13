import { Detail, Home } from "@pages";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import { APITest } from "../pages/APITest";
import { LogIn } from "../pages/LogIn/LogIn";
import { MyPage } from "../pages/MyPage";
import { SignUp } from "../pages/SignUp/SignUp";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "detail/:id",
        element: <Detail />,
      },
      {
        path: "my-page",
        element: <MyPage />,
      },
    ],
  },
  {
    path: "/",
    element: <PublicRoute />,
    children: [
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
    ],
  },

  {
    path: "/apitest",
    element: <APITest />,
  },
]);

export { router };
