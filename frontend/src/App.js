import React from "react";
import Header from './components/header/header';
import "./App.css";
import { connect } from "react-redux";

const App = () => {
  return (
      <div>
        <Header />
      </div>
)};

export default connect()(App);
