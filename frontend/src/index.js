import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import store from "./store";
import "./index.css";
import LandingPage from './components/LandingPage/LandingPage';
import App from './App';
import * as serviceWorker from "./serviceWorker";
import NewRestaurantForm from "./components/NewRestaurantForm/newRestaurantForm";
import SearchPage from "./components/SearchPage/Searchpage";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <App>
                    <Route exact path="/restaurants" component={LandingPage}/>
                    <Route exact path="/restaurants/new/" component={NewRestaurantForm}/>
                    <Route path="/search" component={SearchPage}/>
                </App>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
