import React from "react";
import { connect } from "react-redux";
import "./index.css";

const RestaurantCard = props => {
  return (
    <div>
      <h3>
        {props.restaurantDetails.name}
      </h3>
      <h4>{props.restaurantDetails.location}</h4>
      <p>Stars</p>
      <img src={props.restaurantDetails.avatar} alt="avatar" />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    restaurantDetails: state.restaurantDetails.restaurantDetails
  };
};

export default connect(mapStateToProps)(RestaurantCard);