import React from "react";
import {connect} from "react-redux";
import "./RestaurantCard.css";

const RestaurantCard = props => {
    return (
        <div className="RestaurantCard">
            <h3>{props.restaurant.name}</h3>
            <h4>{props.restaurant.street + props.restaurant.city}</h4>
            <p>Stars</p>
            <img className="RestaurantCard-img" src={props.restaurant.image} alt="restaurant-image"/>
        </div>
    );
};


export default connect()(RestaurantCard);
