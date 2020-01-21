import React from "react";
import {connect} from "react-redux";
import './SearchPage.css';
import RestaurantCard from "../RestaurantCard/RestaurantCard";

const SearchPage = (props) => {
    return (
        <div className="Body">
            <div className="SearchBarContainer">
                <div className="SearchBar">
                    <input placeholder="Search"/>
                </div>
                <div className="SelectCategory">
                    <input placeholder="Search"/>
                </div>
            </div>
            <div className="SearchCategoryBody">
                <div className="SearchCategoryContainer">
                    <h1 className="Link">Restaurants</h1>
                    <h1 className="Link">Reviews</h1>
                    <h1 className="Link">Users</h1>
                </div>
                <div>
                    {
                        props.restaurants.length > 0 &&
                        props.restaurants.map((restaurant, index) => {
                            return <RestaurantCard key={index} restaurant={restaurant}/>
                        })
                    }
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

export default connect(mapStateToProps)(SearchPage);