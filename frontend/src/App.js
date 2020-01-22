import React from "react";
import Header from './components/Header/Header';
import "./App.css";
import { connect } from "react-redux";
import Footer from "./components/Footer/footer"

const App = (props) => {
  return (
      <div>
        <Header />
        {props.children}
        <Footer />
      </div>
)};

export default connect()(App);
