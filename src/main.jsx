import store from "@redux/store";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./App.jsx";
import QueryProvider from "./query/QueryProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryProvider>
    <Provider store={store}>
      <App />
      <ReactQueryDevtools />
    </Provider>
  </QueryProvider>
);
