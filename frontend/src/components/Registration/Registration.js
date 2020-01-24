import React, { useState } from "react";
import { connect } from 'react-redux';
import './Registration.css';
import InputAndLabel from "../InputAndLabel/InputAndLabel";
import OrangeButton from "../OrangeButton/OrangeButton";
import { withRouter } from "react-router-dom";


const Registration = props => {
    let [state, setState] = useState({
      email: "",
    });

    const handleChange = e =>
        setState({ ...state, [e.target.name]: e.target.value });

return(
    <div className="registrationForm">
        <div>
            <h5 className="registrationTitle"><span className="headLine">REGISTRATION</span></h5>
            
        </div>

        <form className="registrationWrapper">

            <div className="registrationRow1">
                <InputAndLabel placeholder={"E-Mail address"} name="email" value={state.email} 
                onChange={handleChange}/>
            </div>
            
            <div className="registrationButton">
                <OrangeButton content="Register"/> 
            </div>
        </form>
    </div>
)

}

const mapStateToProps = state => {
    return {
        tokens: state.loginReducer.tokens,
    }
}

export default withRouter(connect(mapStateToProps)(Registration))