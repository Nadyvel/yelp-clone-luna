import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchSingleRestaurantDetails} from "../../store/action/restaurantDetailAction";
import restaurantBanner1 from "../../assets/images/restaurant-banner-1.jpg";
import './RestaurantDetailView.css';
import OrangeButton from "../OrangeButton/OrangeButton";
import {fetchReviews} from "../../store/action/reviewActions";
import ReviewCardRestaurant from "./ReviewCardRestaurant/ReviewCardRestaurant";

const RestaurantDetailView = (props) => {
    const restaurant_id = props.match.params.id
    useEffect(() => {
        props.dispatch(fetchSingleRestaurantDetails(restaurant_id))
        props.dispatch(fetchReviews(restaurant_id))
    }, []);
    return (
        <div>
            <div className="restaurant-banner">
                <img src={restaurantBanner1} alt="restaurant-banner"/>
            </div>
            <div className="restaurant-bottom-container">
                <div className="restaurant-bottom-left-container">
                    <div className="searchbar">
                        <input placeholder="Filter list..."/>
                        <OrangeButton content={"Filter"}/>
                    </div>
                    <div className="review-list">
                        {
                            props.reviews.length > 0 &&
                            props.reviews.map((review, index) => {
                                return <ReviewCardRestaurant key={index} review={review} length={props.reviews.length}/>
                            })
                        }
                    </div>
                </div>
                <div className="restaurant-bottom-right-container">
                    <div className="business-hours">
                        <h1>business-hours</h1>
                    </div>
                    <div className="price-level">
                        <h1>price-level</h1>
                    </div>
                    <div className="actions">
                        <OrangeButton content={"WRITE A REVIEW"}/>
                        <OrangeButton content={"EDIT DATA"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    console.log('mapStateToProps:', state)
    return {
        singleRestaurant: state.restaurantDetailReducer.singleRestaurant,
        reviews: state.reviewReducer.reviews

    };
};

export default connect(mapStateToProps)(RestaurantDetailView);