import React from "react";
import {connect} from "react-redux";
import './ReviewCard.css';

const ReviewCard = props => {
    return (
        <div className="ReviewCard">
            <div className="UpperUserCard-Container">
                <div className="UpperLeft-UserCard">
                    Image
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
            <div className="LowerReviewCard">
                <div className="RestaurantName">
                    RestaurantName
                </div>
                <div className="Review">
                    Review
                </div>
                <div className="Button-Container">
                    <div className="Button-Left">
                        Button-Left
                    </div>
                    <div className="Button-Right">
                        Button-Right
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