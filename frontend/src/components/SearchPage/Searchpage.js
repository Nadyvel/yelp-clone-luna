import React, {useEffect} from "react";
import {connect} from "react-redux";
import './SearchPage.css';
import { fetchRestaurantDetails } from "../../store/action/restaurantAction";
import { Route, Link } from "react-router-dom";
import ListRestaurants from "../ListRestaurants/ListRestaurants";
import ListUsers from "../ListUsers/ListUsers";

const SearchPage = (props) => {
        useEffect(() => {
        props.dispatch(fetchRestaurantDetails())
    }, []);
    return (
        <div className="Body">
            <div className="SearchBarContainer">
                <div className="SearchBar">
                    <input placeholder="Search"/>
                </div>
                <div className="SelectCategory">
                    <form className='form'>
                        <select className="select" name="category">
                            <option value="res">Restaurants</option>
                            <option value="rev">Review</option>
                            <option value="use">Users</option>
                        </select>
                    </form>
                </div>
            </div>
            <div className="SearchCategoryBody">
                <div className="SearchCategoryContainer">
                    <Link to="/search/restaurants">Restaurants</Link>
                    <Link to="/search/reviews">Reviews</Link>
                    <Link to="/search/users">Users</Link>
                </div>
            </div>
            <Route exact path="/search/restaurants" component={ListRestaurants}/>
            <Route exact path="/search/reviews" component={SearchPage}/>
            <Route exact path="/search/users" component={ListUsers}/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        restaurants: state.restaurantReducer.restaurants
    };
};

export default connect(mapStateToProps)(SearchPage);