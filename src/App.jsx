/* eslint-disable react/prop-types */
import { router } from "@routes/router";
import { RouterProvider } from "react-router-dom";
import QueryProvider from "./query/QueryProvider";

function App() {
  return (
    <>
      <QueryProvider>
        <RouterProvider router={router}></RouterProvider>
      </QueryProvider>
    </>
  );
}

export { App };
