import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
// import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <HashRouter>
      
      <QueryClientProvider client={queryClient}>
        <App />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </HashRouter>
  </React.StrictMode>
);
