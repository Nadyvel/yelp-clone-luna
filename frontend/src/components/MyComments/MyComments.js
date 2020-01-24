import React from "react";
import {connect} from "react-redux";
import "./MyComments.css";

const MyCommentsCard = props => {
    console.log("mycomments from my comment", props)
    return (
        <div className="MyComments">
            {props.myComments && props.myComments.map((comments, i)=> {
                return <p className="eachComment" key={i}> {comments.comments_content}</p>
            })}
        </div>
    );
};


export default connect()(MyCommentsCard);
