import React, { useEffect } from "react";
import { connect } from 'react-redux';
import './Profile.css';
import { withRouter } from "react-router-dom";
import zurichBackground from "./Images/zurichBackground.jpg"
import {meAction} from "../../store/action/meAction"


const Profile = props => {

    useEffect(() => {
        props.dispatch(meAction())
    }, []);

    


    return(
        <div className="profilePage">
            <img className="imgZurich" src={zurichBackground} alt="zurichBackground" />

            <div className="aboutUser">
                <p>ABOUT {props.meInfo.first_name}</p>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    console.log(state.meReducer.meInfo)
    return {
        tokens: state.loginReducer.tokens,
        meInfo: state.meReducer.meInfo,
    }
}

export default withRouter(connect(mapStateToProps)(Profile))

///api/me/