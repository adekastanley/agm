import { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { createRoot } from "react-dom/client";
import ReactDOM from 'react-dom/client'
import "./index.css";
import { router } from "./router";
import { RouterProvider } from "@tanstack/react-router";
// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>,
// );

const queryClient = new QueryClient()

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>
  )
}