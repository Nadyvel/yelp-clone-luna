import React, {useEffect} from "react";
import "./LandingPage.css";
import RestaurantBanner from "../RestaurantBanner/RestaurantBanner";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import {connect} from "react-redux";
import  { fetchRestaurantDetails } from '../../store/action/restaurantAction';

const LandingPage = (props) => {
    useEffect(() => {
        props.dispatch(fetchRestaurantDetails())
    }, []);
    return (
        <div>
            <div>
                <RestaurantBanner/>
            </div>
            <div className="body">
                <div className="restaurant-card-wrapper">
                    <h2 className="title">BEST RATED RESTAURANTS</h2>
                    <div className="RestaurantCard-section">
                        {props.restaurants.length > 0 &&
                        props.restaurants.map((restaurant, index) => {
                            console.log('in da map', restaurant)
                            return <RestaurantCard key={index} restaurant={restaurant}/>
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    console.log('mapStateToProps:', state)
    return {
        restaurants: state.restaurantReducer.restaurants
    };
};

export default connect(mapStateToProps)(LandingPage);