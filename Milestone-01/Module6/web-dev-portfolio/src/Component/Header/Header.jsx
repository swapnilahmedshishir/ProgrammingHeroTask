import React from "react";
import { FaDownload } from "react-icons/fa6";
import { GrPhone } from "react-icons/gr";

const Header = () => {
  return (
    <header>
      <div className="main_header">
        <nav className="header_menubar">
          <div className="header_icon">
            <h1>
              Swa<span className="header_icon_ptext">p</span>nil
            </h1>
          </div>
          <div>
            <ul className="nav_menu">
              <li>
                <a href="http://" className="nav_menu_text">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="http://" className="nav_menu_text">
                  Blog
                </a>
              </li>
              <li>
                <a href="http://">
                  {" "}
                  <button type="button" className="btn">
                    Hire Me
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="developer_div">
          <div className="developer_text_div">
            <h4>Hi, I am</h4>
            <h1>
              swapnil <span className="header_icon_ptext">ahmmed </span>shishir
            </h1>
            <p className="description_text">
              Experienced Web Developer || Proficient JavaScript & React.js
              Node.js, Express.js, MongoDB, MySQL, Talwind Css. Committed to
              providing coding solutions tailored to your needs. With 4 years of
              hands-on experience .
            </p>
            <div>
              <button type="button" className="btn">
                <FaDownload /> Download CV
              </button>
              <button type="button" className="btn btn_contact">
                <GrPhone /> Contact
              </button>
            </div>
          </div>
          <div className="dev_img">
            <img
              src="/assets/swapnil_ahmed_shishir2.png"
              alt="swapnil_ahmed_shishir.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
