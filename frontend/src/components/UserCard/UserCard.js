import React from "react";
import {connect} from "react-redux";
import './UserCard.css';

const UserCard = props => {
    return (
        <div className="UserCard">
            <div className="UpperUserCard-Container">
                <div className="UpperLeft-UserCard">
                    <img src={props.user.image} alt="user-image"/>
                </div>
                <div className="UpperRight-Upper-Container">
                    <div className="UpperRight-Upper-UserCard">
                        <h3 className="username">{props.user.username}</h3>
                    </div>
                    <div className="UpperRight-Lower-UserCard">
                        Review Count
                    </div>
                </div>
            </div>
            <div className="LowerUserCard">
                <p className={"description"}>{props.user.description}</p>
            </div>


            {/*<h3>{props.restaurant.name}</h3>*/}
            {/*<h4>{props.restaurant.street + props.restaurant.city}</h4>*/}
            {/*<p>Stars</p>*/}
            {/*<img className="RestaurantCard-img" src={props.restaurant.image} alt="restaurant-image"/>*/}
        </div>
    );
};


export default connect()(UserCard);