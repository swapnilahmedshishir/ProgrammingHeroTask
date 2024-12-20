import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { AppContext } from "../../Context/ContextApi";

const NavbarsNav = () => {
  const { user, logoutUser } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // log out the user
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        toast.success("Logged out successfully!");
      })
      .catch((error) => {
        // console.error("Logout error:", error.message);
        toast.error("Failed to log out. Please try again.");
      });
  };

  return (
    <>
      {/* Navbar */}
      <nav className="w-full relative z-10 flex bg-white justify-between lg:justify-around py-3 items-center shadow-lg px-5 md:px-10 lg:px-0">
        {/* Logo */}
        <div>
          <NavLink to="/">
            <img
              src="/assets/Logo.png"
              alt="Tojo Foundation logo"
              className="h-10"
            />
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-black rounded-md inline-flex items-center text-3xl focus:outline-none"
          >
            {isOpen ? <FaXmark /> : <IoReorderThreeOutline />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden ${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-white py-4 shadow-md`}
        >
          <ul className="font-montserrat text-left font-bold space-y-4 px-5">
            <li onClick={toggleMenu}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li onClick={toggleMenu}>
              <NavLink to="/donation-capaings"> Donation Campaigns</NavLink>
            </li>
            <li onClick={toggleMenu}>
              <NavLink to="/help">How to Help</NavLink>
            </li>
            <li onClick={toggleMenu}>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li onClick={toggleMenu}>
              {/* Profile Photo or Login Button */}
              <div className="ml-5">
                {user ? (
                  <div
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="cursor-pointer"
                  >
                    <img
                      src={user.photoURL || "https://via.placeholder.com/150"}
                      alt={user.displayName}
                      className="h-10 w-10 rounded-full border-2 border-gray-300"
                    />
                  </div>
                ) : (
                  <Link to="/login">
                    <button className="btn py-2 px-6 bg-gradient-to-r from-g1 to-SkyBlue text-white rounded-3xl">
                      Login
                    </button>
                  </Link>
                )}

                {/* Dropdown */}
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-40 bg-[#031741] text-white border rounded shadow-lg">
                    <button
                      onClick={handleLogout}
                      className="font-extrabold w-full text-left px-4 py-2  hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center">
          <ul className="flex font-montserrat font-bold">
            <li className="px-5">
              <NavLink to="/" className="hover:text-blue1">
                Home
              </NavLink>
            </li>
            <li className="px-5">
              <NavLink to="/donation-capaings" className="hover:text-blue1">
                Donation Campaigns
              </NavLink>
            </li>
            <li className="px-5">
              <NavLink to="/help" className="hover:text-blue1">
                How to Help
              </NavLink>
            </li>
            <li className="px-5">
              <NavLink to="/dashboard" className="hover:text-blue1">
                Dashboard
              </NavLink>
            </li>
          </ul>

          {/* Profile Photo or Login Button */}
          <div className="ml-5">
            {user ? (
              <div
                onClick={() => setShowDropdown(!showDropdown)}
                className="cursor-pointer"
              >
                <img
                  src={user.photoURL || "https://via.placeholder.com/150"}
                  alt={user.displayName}
                  className="h-10 w-10 rounded-full border-2 border-gray-300"
                />
              </div>
            ) : (
              <Link to="/login">
                <button className="btn py-2 px-6 bg-gradient-to-r from-g1 to-SkyBlue text-white rounded-3xl">
                  Login
                </button>
              </Link>
            )}

            {/* Dropdown */}
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-[#031741] text-white border rounded shadow-lg">
                <button
                  onClick={handleLogout}
                  className="font-extrabold w-full text-left px-4 py-2"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarsNav;
