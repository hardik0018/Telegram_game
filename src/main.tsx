import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ContextProvider } from "./context/useContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ContextProvider>
      <App />
    </ContextProvider>
  </QueryClientProvider>
);
