import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import './Profile.css';
import { withRouter } from "react-router-dom";
import zurichBackground from "./Images/zurichBackground.jpg"
import {meAction} from "../../store/action/meAction"
import {myCommentsAction} from "../../store/action/myCommentsAction"
import MyComments from "../MyComments/MyComments"
import MyRestaurants from "../MyRestaurants/MyRestaurants"
import {Route, Link} from "react-router-dom";
import {myRestaurantsAction} from "../../store/action/myCommentsAction"

const Profile = props => {
    const [ showComents, setShowComents ] = useState(true);
    const [ showRestaurant, setShowRestaurant ] = useState(false);

    ///api/restaurants/user/<int:user_id>/ 
    useEffect(() => {
        props.dispatch(meAction())
        props.dispatch(myCommentsAction())
        props.dispatch(myRestaurantsAction())
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

                                {/* <p style={{cursor: 'pointer'}} onClick={()=> setShowComents(!showComents)
                                } 
                                className="optionUser">Comments</p>   */}

                                <p style={{cursor: 'pointer'}} onClick={()=> {setShowComents(!showComents)
                                    setShowRestaurant(!showRestaurant)
                                    
                                    }} className="optionUser">Comments</p> 


                                <p style={{cursor: 'pointer'}} onClick={()=> {setShowComents(!showComents)
                                    setShowRestaurant(!showRestaurant)
                                    
                                    }} className="optionUser">Restaurants</p> 
                                <p style={{cursor: 'pointer'}}  className="optionUser">Edit profile</p> 
                        </div>
                        <div className="middleInfoCard">
                            { showComents && <div className="commentsTagTitle" style={{position: "absolute"}} 
                            >COMMENTS <MyComments myComments={props.myComments}/></div> 
                            }

                            { showRestaurant && <div className="commentsTagTitle" style={{position: "absolute"}}
                            >RESTAURANTS <MyRestaurants myRestaurants={props.myRestaurants}/></div>}

                      
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
        myRestaurants: state.myCommentsReducer.myRestaurants
    }
}

export default withRouter(connect(mapStateToProps)(Profile))

///api/me/
///api/review/comment/<int:user_id>/  comments of a single user
///api/reviews/user/<int:user_id>/    reviews of a single user