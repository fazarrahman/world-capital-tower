import React from 'react';
import "../app/common_style.css";
import { FaPhone } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className="navbar tc-navbar-style5">
      <div className="container">
        <div className="col-lg-3 d-none d-lg-block">
          <div className="nav-links">
            <a href="#" className="me-5">
              <i className="la la-tty cir-icon"><FaPhone color='white' /></i>
              <span className="txt"> +62 8531 86 86 </span>
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="logo text-center mb-4 mb-lg-0">
            <img src="/assets/images/logo.png" alt="" />
          </div>
        </div>
        <div className="col-lg-3 text-lg-end">
          <div className="nav-btns">
            <a
              href="#"
              className="butn border border-brown1 rounded-pill hover-bg-brown1 text-uppercase color-brown1"
            >
              <span> schedule a visit </span>
            </a>
            <a href="#" className="icon ms-4 side_menu_btn">
              <span>
                <i className="la la-grip-lines"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
