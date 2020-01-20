import React from "react";
import "./RestaurantBanner.css";
import { connect } from "react-redux";
import OrangeButton from "../../components/OrangeButton/OrangeButton";

const RestaurantBanner = () => {
    return (
        <div className="banner-box">
            <form>
                <input placeholder="Search..."/>
                <OrangeButton content={"Search"} />
            </form>
        </div>
    )
}

export default connect()(RestaurantBanner);