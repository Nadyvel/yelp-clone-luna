import React from "react";
import Header from './components/header/header';
import "./App.css";
import { connect } from "react-redux";
import LandingPage from "./components/LandingPage/LandingPage";

const App = () => {
  return (
      <div>
        <Header />
        <LandingPage/>
      </div>
)};

export default connect()(App);
