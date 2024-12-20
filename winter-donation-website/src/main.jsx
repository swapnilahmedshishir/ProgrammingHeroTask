import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import RoutersItems from "./Component/Router/Router";
import ContextApi from "./Context/ContextApi";

const router = createBrowserRouter(RoutersItems, {
  future: {
    v7_startTransition: true,
    v7_normalizeFormMethod: true,
  },
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextApi>
      <RouterProvider router={router} />
    </ContextApi>
  </React.StrictMode>
);
