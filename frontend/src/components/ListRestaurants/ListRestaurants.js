import React, {Fragment} from "react";
import {connect} from "react-redux";
import RestaurantCard from "../RestaurantCard/RestaurantCard";

const ListRestaurants = (props) => {
    return (
        <Fragment>
                    {
            props.restaurants.length > 0 &&
                props.restaurants.map((restaurant, index) => {
                    // console.log('in da map', restaurant)
                    return <RestaurantCard key={index} restaurant={restaurant}/>
                })
        }

        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        restaurants: state.restaurantReducer.restaurants
    };
};

export default connect(mapStateToProps)(ListRestaurants);