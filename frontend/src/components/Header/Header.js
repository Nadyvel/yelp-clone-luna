import React from "react";
import "./Header.css";
import luna from "../../assets/svg/logo.svg";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const Header = props => {

  const handleClick = () => {
      props.history.push('/login');
  }

  const handleSignUp = () => {
    props.history.push('/registration');
  }

  const handleProfile = () => {
    props.history.push('/profile')
  }

  return <div className="header-wrapper">
    <div className="header-left">
      <img src={luna} alt="logo" />
    </div>
    <div className="header-right">
      <p className="header-font-size">Home</p>
      <p className="header-font-size">Search</p>
      <p style={{cursor: 'pointer'}} onClick={handleProfile} className="header-font-size">Profile</p>
      <div>
        <button onClick={handleSignUp} className="header-button-left">SIGNUP</button>
        <button onClick={handleClick} className="header-button-right">LOGIN</button>
      </div>
    </div>
  </div>
};


export default withRouter(connect()(Header));