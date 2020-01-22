import React from "react";
import {connect} from "react-redux";
import './UserCard.css';

const UserCard = props => {
    console.log(props.user.username)
    return (
        <div className="UserCard">
            <div className="UpperUserCard-Container">
                <div className="UpperLeft-UserCard">
                    <h3>{props.user.username}</h3>
                </div>
                <div className="UpperRight-Upper-Container">
                    <div className="UpperRight-Upper-UserCard">
                        UserName
                    </div>
                    <div className="UpperRight-Lower-UserCard">
                        Review Count
                    </div>
                </div>
            </div>
            <div className="LowerUserCard">
                UserBio
            </div>


            {/*<h3>{props.restaurant.name}</h3>*/}
            {/*<h4>{props.restaurant.street + props.restaurant.city}</h4>*/}
            {/*<p>Stars</p>*/}
            {/*<img className="RestaurantCard-img" src={props.restaurant.image} alt="restaurant-image"/>*/}
        </div>
    );
};


export default connect()(UserCard);