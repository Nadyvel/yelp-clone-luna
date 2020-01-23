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

        </div>
    );
};


export default connect()(UserCard);