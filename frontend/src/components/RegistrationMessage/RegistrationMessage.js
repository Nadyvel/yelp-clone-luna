import React, { useState } from "react";
import { connect } from 'react-redux';
import './RegistrationMessage.css';
import InputAndLabel from "../InputAndLabel/InputAndLabel";
import OrangeButton from "../OrangeButton/OrangeButton";


const RegistrationMessage = props => {

return(
    <div className="registrationMessageForm">
        <div>
        <h5 className="registrationMessageTitle"><span className="headLine">REGISTRATION</span></h5>
        
        </div>

            <div className="registrationMessage">
                <p className="lineMessage">Thanks for your registration.</p>
                <p className="lineMessage">Our hard working monkeys are preparing a digital</p>
                <p className="lineMessage">message called E-Mail that will be sent to you soon.</p>
                <p className="lineMessage">Since monkeys arent good in writing the message could</p>
                <p className="lineMessage">end up in you junk folder. Our apologies for any</p>
                <p className="lineMessage">inconvienience.</p>
            </div>
            
         
    </div>
)

}

export default connect()(RegistrationMessage);
