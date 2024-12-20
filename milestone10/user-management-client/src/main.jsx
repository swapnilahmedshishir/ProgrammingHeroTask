import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { UserUpdate } from "./Component/UserUpdate.jsx";

// Render the main app in the DOM
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/user/:id",
    element: <UserUpdate />,
    loader: ({ params }) => fetch(`http://localhost:3000/user/${params.id}`),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
