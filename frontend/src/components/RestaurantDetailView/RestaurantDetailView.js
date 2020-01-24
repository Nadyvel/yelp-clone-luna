import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchSingleRestaurantDetails} from "../../store/action/restaurantDetailAction";
import restaurantBanner1 from "../../assets/images/restaurant-banner-1.jpg";
import './RestaurantDetailView.css';
import OrangeButton from "../OrangeButton/OrangeButton";
import {fetchReviews} from "../../store/action/reviewActions";
import ReviewCardRestaurant from "./ReviewCardRestaurant/ReviewCardRestaurant";
import clock from "../../assets/svg/clock.svg";
import money from "../../assets/svg/money.svg";
import map from "../../assets/images/map.png";
import pin from "../../assets/svg/pin.svg";
import phone from "../../assets/svg/phone.svg";
import web from "../../assets/svg/web.svg";
import star from "../../assets/svg/star.svg";


const RestaurantDetailView = (props) => {
    const restaurant_id = props.match.params.id
    useEffect(() => {
        props.dispatch(fetchSingleRestaurantDetails(restaurant_id))
        props.dispatch(fetchReviews(restaurant_id))
    }, []);
    return (
        <div>
            <div className="restaurant-banner">
                <div className="small-banner">
                    <div className="restaurant-info-container">
                        <div className="restaurant-name">
                            <h1>{props.singleRestaurant.name}</h1>
                        </div>
                        <div className="restaurant-category">
                            <h2>{props.singleRestaurant.category}</h2>
                        </div>
                        <div className="stars-rating-container">
                            <div className="rating-stars">
                                <img id="active" src={star} alt="star"/>
                                <img id="active" src={star} alt="star"/>
                                <img id="active" src={star} alt="star"/>
                                <img src={star} alt="star"/>
                            </div>
                            <div className="restaurant-reviews">
                                <h4>{props.singleRestaurant['total_ratings']} reviews</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner_and_box">
                    <img src={restaurantBanner1} alt="restaurant-banner"/>
                </div>
                <div className="map-box">
                    <img src={map} alt="map"/>
                    <div className="rows">
                        <div className="first-row">
                            <img src={pin} alt="pin"/>
                            <p className="street">{props.singleRestaurant.street}</p>
                        </div>
                        <div className="second-row">
                            <img src={phone} alt="phone"/>
                            <p className="street">{props.singleRestaurant.phone_number}</p>
                        </div>
                        <div className="third-row">
                            <img src={web} alt="web"/>
                            <p className="street">{props.singleRestaurant.restaurant_email}</p>
                        </div>
                    </div>
                </div>
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
                        <img src={clock} alt="clock"/>
                        <h1>{props.singleRestaurant.opening_hours ? props.singleRestaurant.opening_hours : "Keine Öffnungszeiten vorhanden"}</h1>
                    </div>
                    <div className="price-level">
                        <img src={money} alt="money"/>
                        <h1>Price level: {props.singleRestaurant.price_level}</h1>
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
    return {
        singleRestaurant: state.restaurantDetailReducer.singleRestaurant,
        reviews: state.reviewReducer.reviews

    };
};

export default connect(mapStateToProps)(RestaurantDetailView);