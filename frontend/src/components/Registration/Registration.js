import React, {useState} from "react";
import {connect} from 'react-redux';
import './Registration.css';
import InputAndLabel from "../InputAndLabel/InputAndLabel";
import OrangeButton from "../OrangeButton/OrangeButton";
import {withRouter} from "react-router-dom";
import {registrationAction} from "../../store/action/registrationAction";


const Registration = props => {
    let [state, setState] = useState({
        email: "",
    });

    const handleChange = e =>
        setState({...state, [e.target.name]: e.target.value});
    const handleRegistration = async e => {
        e.preventDefault();
        const response = await props.dispatch(registrationAction(state.email));
        if (Number(response.status) === 200) {
            props.history.push("/congrats");
        }
    }
    return (
        <div className="registrationForm">
            <div>
                <h5 className="registrationTitle">REGISTRATION</h5>
                <span className="headLine"></span>
            </div>
            <form className="registrationWrapper" onSubmit={handleRegistration}>

                <div className="registrationRow1">
                    <InputAndLabel type="submit" placeholder={"E-Mail address"} name="email" value={state.email}
                                   onChange={handleChange}/>
                </div>
                <div className="registrationButton">
                    <OrangeButton content="Register"/>
                </div>
            </form>
        </div>
    )
}

export default withRouter(connect()(Registration))