import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./Store/store.ts";
import "./index.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <QueryClientProvider client={new QueryClient()}>
      <StrictMode>
        <App />
      </StrictMode>
    </QueryClientProvider>
  </Provider>
);
