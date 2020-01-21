import React from "react";
import Header from './components/Header/Header';
import "./App.css";
import { connect } from "react-redux";
import LandingPage from "./components/LandingPage/LandingPage";
import Footer from "./components/Footer/footer"

const App = (props) => {
  return (
      <div>
        <Header />
        {props.children}
      </div>
)};

export default connect()(App);
