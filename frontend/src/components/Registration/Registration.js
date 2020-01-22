import React, { useState } from "react";
import { connect } from 'react-redux';
import './Registration.css';
import InputAndLabel from "../InputAndLabel/InputAndLabel";
import OrangeButton from "../OrangeButton/OrangeButton";


const Registration = props => {
    let [state, setState] = useState({
      email: "",
    });

    const handleChange = e =>
        setState({ ...state, [e.target.name]: e.target.value });

return(
    <div className="registrationForm">
        <div>
        <h5 className="registrationTitle">REGISTRATION</h5>
        <span className="headLine"></span>
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

export default connect()(Registration);