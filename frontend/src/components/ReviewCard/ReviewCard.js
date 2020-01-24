import React from "react";
import {connect} from "react-redux";
import './ReviewCard.css';
import GreyLikeButton from "../GreyLikeButton/GreyLikeButton";
import GreyCommentButton from "../GreyCommentButton/GreyCommentButton";

const ReviewCard = props => {
    console.log('userprops', props)
    return (
        <div className="ReviewCard">
            <div className="UpperUserCard-Container">
                <div className="UpperLeft-UserCard">
                    <img src={props.users} alt="user-image"/>
                </div>
                <div className="UpperRight-Upper-Container">
                    <div className="UpperRight-Upper-UserCard">
                        {props.review.user.username}
                    </div>
                    <div className="UpperRight-Lower-UserCard">
                        {props.length}
                    </div>
                </div>
            </div>
            <div className="LowerReviewCard">
                <div className="RestaurantName">
                    {props.review.restaurant}
                </div>
                <div className="Review">
                    {props.review.rating}
                </div>
                <div className="Button-Container">
                    <div className="Button-Left">
                        <GreyLikeButton reviewLikes={props.review.total_likes}/>
                    </div>
                    <div className="Button-Right">
                        <GreyCommentButton commentCount={props.review.comments}/>
                    </div>
                </div>
                <div className="Review-Comments">
                    Latest Comments
                </div>
                <div className="Comment-1">
                    Comment 1
                </div>
                <div className="Comment-2">
                    Comment 2
                </div>
            </div>
        </div>
    );
};


export default connect()(ReviewCard);