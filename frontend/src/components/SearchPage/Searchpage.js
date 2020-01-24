import React, {useEffect} from "react";
import {connect} from "react-redux";
import './SearchPage.css';
import {fetchRestaurantDetails} from "../../store/action/restaurantAction";
import {Route, Link, Redirect} from "react-router-dom";
import ListRestaurants from "../ListRestaurants/ListRestaurants";
import ListUsers from "../ListUsers/ListUsers";
import ListReviews from "../ListReviews/ListReviews";

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
                    <Link to="/search/restaurants" className="LinkText">RESTAURANTS</Link>
                    <Link to="/search/reviews" className="LinkText">REWIEWS</Link>
                    <Link to="/search/users" className="LinkText">USERS</Link>
                </div>
            </div>
            <Route exact path="/search/restaurants" component={ListRestaurants}/>
            <Route path="/search/reviews/" component={ListReviews}/>
            <Route exact path="/search/users" component={ListUsers}/>
            <Redirect from="/search" to="/search/restaurants"/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        restaurants: state.restaurantReducer.restaurants
    };
};

export default connect(mapStateToProps)(SearchPage);