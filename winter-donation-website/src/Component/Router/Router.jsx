import App from "../../App";
import Login from "../Auth/Login";
import Registration from "../Auth/Registration";
import CampaignDetails from "../CampaignsPage/CampaignDetails";
import CampaignsPage from "../CampaignsPage/CampaignsPage";
import Dashboard from "../Dashboard/Dashboard";
import Erro from "../ErroPage/Erro";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import { Help } from "../Help/Help";
import MainHome from "../Home/MainHome";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateProfile from "../UpdateProfile/UpdateProfile";

const RoutersItems = [
  {
    path: "/",
    element: <App></App>,
    errorElement: <Erro></Erro>,
    children: [
      {
        path: "/",
        element: <MainHome></MainHome>,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/donation-capaings",
        element: <CampaignsPage />,
        loader: async () => {
          const response = await fetch("/FackData/CampaingsData.json");
          return response.json();
        },
      },
      {
        path: "/campaigns/:id",
        element: (
          <PrivateRoute>
            <CampaignDetails />
          </PrivateRoute>
        ),
        loader: () => fetch(`/FackData/CampaingsData.json`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
];

export default RoutersItems;
