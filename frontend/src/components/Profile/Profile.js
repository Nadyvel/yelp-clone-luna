import React, { useEffect } from "react";
import { connect } from 'react-redux';
import './Profile.css';
import { withRouter } from "react-router-dom";
import zurichBackground from "./Images/zurichBackground.jpg"
import {meAction} from "../../store/action/meAction"
import {myCommentsAction} from "../../store/action/myCommentsAction"

const Profile = props => {
    
    useEffect(() => {
        props.dispatch(meAction())
        props.dispatch(myCommentsAction())
    }, []);



    return(
        <div className="profilePage">
            <div className="profileImages">
                <img className="imgZurich" src={zurichBackground} alt="zurichBackground" />
                <div className="back_data">
                    <div className="profile_back_info">
                        <div className="UserProfileCard">
                            <img className="profile_pic" src={props.meInfo.image} alt="profile_pic"/>
                            <p className="left_user_data">{props.meInfo.first_name}'s profile</p>
                                <p style={{cursor: 'pointer'}}  className="optionUser">Reviews</p>
                                <p style={{cursor: 'pointer'}}  className="optionUser">Comments</p>  
                                <p style={{cursor: 'pointer'}}  className="optionUser">Restaurants</p> 
                                <p style={{cursor: 'pointer'}}  className="optionUser">Edit profile</p> 
                        </div>
                        <div className="middleInfoCard">
                        <p>REVIEWS</p>
                        {props.myComments && props.myComments.map((comments, i)=> {
                            return  <p key={i}>{comments.restaurant_review}
                            {comments.created}
                            {comments.comments_content}</p>
                        }
                        )}   
                        </div>

                    </div>

                    

                    <div className="back_info">
                        <p className="back_info_style">{props.meInfo.first_name} {props.meInfo.last_name}</p>
                        <p className="back_info1_style">{props.meInfo.location}</p>
                        <p className="back_info1_style">reviews</p>
                        <p className="back_info1_style">{props.myComments.length} comments</p>
                    </div>
                </div>
            </div>
            <div className="userInformation">
                <div>
                    
                </div>

                <div className="aboutUser">
                    <p className="descriptionTitle">ABOUT {props.meInfo.first_name}</p>
                    <p className="descriptionTitle">Location</p>
                    <p className="userInfo">{props.meInfo.location}</p>
                    <p className="descriptionTitle">Luna member since</p>
                    <p className="userInfo">{props.meInfo.date_joined}</p>
                    <p className="descriptionTitle">Things I love</p>
                    <p className="userInfo">{props.meInfo.things_love}</p>
                    <p className="descriptionTitle">Description</p>
                    <p className="userInfo">{props.meInfo.description}</p>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        tokens: state.loginReducer.tokens,
        meInfo: state.meReducer.meInfo,
        myComments: state.myCommentsReducer.myComments,
    }
}

export default withRouter(connect(mapStateToProps)(Profile))

///api/me/
///api/review/comment/<int:user_id>/  comments of a single user
///api/reviews/user/<int:user_id>/    reviews of a single user