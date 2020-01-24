import React from "react";
import {connect} from "react-redux";
import "./RestaurantCard.css";
import { Link } from 'react-router-dom';

const RestaurantCard = props => {
    return (
        <div className="RestaurantCard">
            <Link to={`/restaurants/${props.restaurant.id}`}><h3>{props.restaurant.name}</h3></Link>
            <h4>{props.restaurant.street + props.restaurant.city}</h4>
            <p>Stars</p>
            <img className="RestaurantCard-img" src={props.restaurant.image} alt="restaurant-image"/>
        </div>
    );
};


export default connect()(RestaurantCard);
