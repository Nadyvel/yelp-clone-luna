import React from "react";
import "./header.css";
import luna from "../../assets/logo.svg";
import { connect } from "react-redux";

const Header = () => {
  return <div className="header-wrapper">
    <div className="header-left">
      <img src={luna} alt="logo" />
    </div>
    <div className="header-right">
      <p>Home</p>
      <p>Search</p>
      <p>Profile</p>
      <button>SIGNUP</button>
      <button>LOGIN</button>
    </div>
  </div>
};

export default connect()(Header);