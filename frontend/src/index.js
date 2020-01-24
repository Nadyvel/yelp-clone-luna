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
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import RestaurantDetailView from "./components/RestaurantDetailView/RestaurantDetailView";
import ListReviews from "./components/ListReviews/ListReviews";
import Profile from "./components/Profile/Profile";
import RegistrationMessage from "./components/RegistrationMessage/RegistrationMessage";
import VerificationForm from "./components/VerificationForm/VerificationForm";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={LandingPage}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/restaurants/new/" component={NewRestaurantForm}/>
                    <Route exact path="/restaurants/:id" component={RestaurantDetailView}/>
                    <Route path="/search/" component={SearchPage}/>
                    <Route exact path="/registration" component={Registration}/>
                    <Route exact path="/congrats" component={RegistrationMessage}/>
                    <Route exact path="/profile" component={Profile}/>
                    <Route exact path="/reviews/restaurant/:id" component={ListReviews}/>
                    <Route exact path="/validate" component={VerificationForm}/>
                </Switch>
            </App>
        </Router>
    </Provider>,
    document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
