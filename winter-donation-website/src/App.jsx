import React from "react";
import NavbarsNav from "./Component/NavbarItem/Navbars";
import Footer from "./Component/FooterSection/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div>
      <ToastContainer position="top-center" autoClose={3000} />
      <NavbarsNav></NavbarsNav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
