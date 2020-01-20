import React from "react";
import RestaurantBanner from "../RestaurantBanner/RestaurantBanner";
import {connect} from "react-redux";

const LandingPage = () => {
    return (
        <RestaurantBanner />
    )
}

export default connect()(LandingPage);