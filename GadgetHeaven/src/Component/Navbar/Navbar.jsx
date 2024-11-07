import { useContext } from "react";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AppContext } from "../../ContextApi/ContextApi";

const Navbar = () => {
  const location = useLocation();
  const showNavbar = location.pathname === "/";

  const { cart, wishlist, setActiveTab } = useContext(AppContext);

  return (
    <div
      className={`navbar mt-2 ${
        !showNavbar ? "bg-white text-black " : "bg-transparent text-white"
      }   z-[100] `}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/statistics">Statistics</NavLink>
            </li>
            <li>
              <NavLink to="/dashbord">Dashbord</NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Gadget Heaven
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="mr-2">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="mr-2">
            <NavLink to="/statistics">Statistics</NavLink>
          </li>
          <li className="mr-2">
            <NavLink to="/dashbord">Dashbord</NavLink>
          </li>
          <li>
            <NavLink to="/order-tracking">Order Tracking</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/dashbord" onClick={() => setActiveTab("cart")}>
          <div className="btn mr-2 rounded-full relative">
            <FaShoppingCart />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                {cart.length}
              </span>
            )}
          </div>
        </Link>
        <Link to="/dashbord" onClick={() => setActiveTab("wishlist")}>
          <div className="btn rounded-full relative">
            <FaRegHeart />

            {wishlist.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                {wishlist.length}
              </span>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
