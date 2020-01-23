import React from "react";
import {connect} from "react-redux";
import './ReviewCardRestaurant.css';
import GreyLikeButton from "../../GreyLikeButton/GreyLikeButton";
import GreyCommentButton from "../../GreyCommentButton/GreyCommentButton";

const ReviewCardRestaurant = props => {
    console.log(props.review.user.image)
    return (
        <div className="ReviewCardRestaurant">
            <div className="UpperUserCard-Container-Restaurant">
                <div className="UpperLeft-UserCard">
                    <img src={props.review.user.image} alt="userimage"/>
                </div>
                <div className="UpperRight-Upper-Container">
                    <div className="UpperRight-Upper-UserCard">
                        {props.review.user.username}
                    </div>
                    <div className="UpperRight-Lower-UserCard">
                        {props.length}<p>Reviews in total</p>
                    </div>
                </div>
                <div className="Upper-mid">
                    <div className="Review">
                        {props.review.rating}
                    </div>
                </div>
                <div className="upper-right">
                    {props.review.created}
                </div>
            </div>
            <div className="LowerReviewCard-Restaurant">
                <div className="content">
                    {props.review.content}
                </div>
            </div>
            <div className="card-footer">
                <div className="Button-Container">
                    <div className="Button-Left">
                        <GreyLikeButton reviewLikes={props.review.likes}/>
                    </div>
                    <div className="Button-Right">
                        <GreyCommentButton commentCount={props.review.comments}/>
                    </div>
                </div>
                <div>
                    <p>View all comments</p>
                </div>
            </div>
        </div>
    );
};


export default connect()(ReviewCardRestaurant);