import React, { useState } from "react";
import { connect } from 'react-redux';
import './Login.css';
import InputAndLabel from "../InputAndLabel/InputAndLabel";
import OrangeButton from "../OrangeButton/OrangeButton";
import { withRouter } from "react-router-dom"
import {loginAction} from '../../store/action/loginAction';

const Login = props => {
    let [state, setState] = useState({
      username: "",
      password: "",
    });

    const handleChange = e =>
        setState({ ...state, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        props.dispatch(loginAction())
    }

return(
    <div className="loginForm">
        <div>
        <h5 className="loginTitle">LOGIN</h5>
        <span className="headLine"></span>
        </div>

        <form onSubmit={handleSubmit} className="loginWrapper">

            <div className="loginRow1">
                <InputAndLabel placeholder={"Username"} name="username" value={state.username} 
                onChange={handleChange}/>
            </div>
            <div className="loginRow2">
                <InputAndLabel placeholder={"Password"} name="password" 
                value={state.password} onChange={handleChange}/>
            </div>
            
            <div className="loginButton">
                <OrangeButton content="Login"/> 
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

export default withRouter(connect(mapStateToProps)(Login))