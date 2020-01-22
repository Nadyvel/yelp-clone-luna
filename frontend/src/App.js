import React from "react";
import "./App.css";
import { connect } from "react-redux";
import LandingPage from "./components/LandingPage/LandingPage";
import Footer from "./components/Footer/footer"
import Header from "./components/header/Header";
import VerificationForm from "./components/VerificationForm/VerificationForm";
import Login from "./components/Login/Login";

const App = () => {
  return (
      <div>
        <Header />
        <LandingPage />
        <Login/>
        
        <Footer />
      </div>
)};

export default connect()(App);
