import React from "react";
import {connect} from "react-redux";
import "./RestaurantCard.css";
import Restaurant1 from '../../assets/images/Restaurant1.png';

const RestaurantCard = props => {
    return (
        <div className="restaurant-card-wrapper">
            <h2 className="title">BEST RATED RESTAURANTS</h2>
            <div className="RestaurantCard-section">
                {[1, 2, 3, 4].map(card => {
                    return (
                        <div>
                            <div className="RestaurantCard">
                                <h3>Restaurant Name</h3>
                                <h4>Address</h4>
                                <p>Stars</p>
                                <img className="RestaurantCard-img" src={Restaurant1} alt="restaurant-image"/>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    );
};

// const mapStateToProps = state => {
//   return {
//     restaurantDetails: state.restaurantDetails.restaurantDetails
//   };
// };

export default connect()(RestaurantCard);


{/*<h3>*/
}
{/*  {props.restaurantDetails.name}*/
}
{/*</h3>*/
}
{/*<h4>{props.restaurantDetails.location}</h4>*/
}
{/*<img src={props.restaurantDetails.avatar} alt="avatar" />*/
}