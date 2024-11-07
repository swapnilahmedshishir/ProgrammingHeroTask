import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Erro } from "./Component/ErroPage/Erro";
import Home from "./Component/Home/Home";
import Dashbord from "./Component/Dashbord/Dashbord";
import { AppProvider } from "./ContextApi/ContextApi";
import ProductDetalis from "./Component/ProductDetailsPage/ProductDetalis";
import Statistics from "./Component/Statistics/Statistics";
import OrderTracking from "./Component/OrderTracking/OrderTracking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Erro></Erro>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/dashbord",
        element: <Dashbord></Dashbord>,
      },
      {
        path: "/product/:productId",
        element: <ProductDetalis />,
        loader: () => fetch("/FackData/FackData.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/order-tracking",
        element: <OrderTracking />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>
);
