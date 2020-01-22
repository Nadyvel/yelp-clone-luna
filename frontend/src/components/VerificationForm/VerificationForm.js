import React, { useState } from "react";
import {connect} from "react-redux";
import './VerificationForm.css';
import OrangeButton from "../OrangeButton/OrangeButton"
import InputAndLabel from "../InputAndLabel/InputAndLabel";

const VerificationForm = (props) => {
    let [state, setState] = useState({
        email: "",
        validation_code: "",
        username: "",
        location: "",
        password: "",
        password_repeat: "", 
    })

    const handleChange = e =>
        setState({ ...state, [e.target.name]: e.target.value });

    return (
        <div className="VerificationForm">
            <h5 className="verificationTitle">VERIFICATION</h5>

            <div className="rowVerif1">
                <InputAndLabel placeholder={"E-Mail address"} name="email" value={state.email} 
                onChange={handleChange}/>

                <InputAndLabel placeholder={"Validation code"} name="validation_code" 
                value={state.validation_code} onChange={handleChange}/>
            </div>
            <div className="rowVerif2">
                <InputAndLabel placeholder={"Username"} name="username" 
                value={state.username} onChange={handleChange}/>

                <InputAndLabel placeholder={"Location"} name="location" 
                value={state.location} onChange={handleChange}/>
            </div>
            <div className="rowVerif3">
                <InputAndLabel placeholder={"Password"} name="password" 
                value={state.password} onChange={handleChange}/>

                <InputAndLabel placeholder={"Password repeat"} name="password_repeat" 
                value={state.password_repeat} onChange={handleChange}/>
            </div>
            <div className="submitButton">
                <OrangeButton content="Finish registration"/> 
            </div>
        </div>
    )
}

export default connect()(VerificationForm);
