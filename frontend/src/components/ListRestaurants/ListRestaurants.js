import React from "react";
import {connect} from "react-redux";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import './ListRestaurants.css';

const ListRestaurants = (props) => {
    return (
        <div className="ListRestaurant-Container">
                    {
            props.restaurants.length > 0 &&
                props.restaurants.map((restaurant, index) => {
                    return <RestaurantCard key={index} restaurant={restaurant}/>
                })
        }

        </div>
    )
}

const mapStateToProps = state => {
    return {
        restaurants: state.restaurantReducer.restaurants
    };
};

export default connect(mapStateToProps)(ListRestaurants);