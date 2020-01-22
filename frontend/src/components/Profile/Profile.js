import React, { useState } from "react";
import { connect } from 'react-redux';
import './Profile.css';
import { withRouter } from "react-router-dom";
import zurichBackground from "./Images/zurichBackground.jpg"

const Profile = props => {



    return(
        <div className="profilePage">
            <img className="imgZurich" src={zurichBackground} alt="zurichBackground" />

            <div className="aboutUser">

            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        tokens: state.loginReducer.tokens,
        
    }
}

export default withRouter(connect(mapStateToProps)(Profile))