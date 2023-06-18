import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
        <BrowserRouter>

    <QueryClientProvider client={queryClient}>
      <App />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);