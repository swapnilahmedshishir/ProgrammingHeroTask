import React from "react";
import Logo from "/assets/logo.png";

const Navbar = ({ coin }) => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start w-[29%] lg:hidden">
        {/* mobile version menu */}
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
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
            tabIndex="0"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedule</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center lg:navbar-start">
        <img src={Logo} alt="Logo in bplitrmd " />
      </div>
      <div className="navbar-end lg:hidden">
        {coin} Coin
        <img src="/assets/coin-794.svg" className="w-5" />
      </div>
      <div className="navbar-end hidden lg:flex align-middle">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Fixture</a>
          </li>
          <li>
            <a>Teams</a>
          </li>
          <li>
            <a>Schedule</a>
          </li>
          <li>
            <a>
              {" "}
              {coin} Coin
              <img src="/assets/coin-794.svg" className="w-5" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
