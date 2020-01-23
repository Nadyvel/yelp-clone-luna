import React from "react";
import {connect} from "react-redux";
import like from "../../assets/svg/thumbsup.png";
import './GreyLikeButton.css';

const GreyLikeButton = (props) => {
    return (
        <div>
            <button className="GreyLikeButton">
                <img src={like}/>
                <p>Like</p>
                <p>{props.reviewLikes}</p>
            </button>
        </div>
    )
}

export default connect()(GreyLikeButton);