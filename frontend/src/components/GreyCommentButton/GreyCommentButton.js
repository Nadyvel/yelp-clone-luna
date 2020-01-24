import React from "react";
import {connect} from "react-redux";
import './GreyCommentButton.css';

const GreyCommentButton = (props) => {
    return (
        <div>
            <button className="GreyCommentButton">
                <p>Comment</p>
                <p>{props.commentCount}</p>
            </button>
        </div>
    )
}

export default connect()(GreyCommentButton);