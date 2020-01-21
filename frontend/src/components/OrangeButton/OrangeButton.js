import React from "react";
import {connect} from "react-redux";
import './OrangeButton.css';

const orangeButton = (props) => {
    return (
        <button id="OrangeButton">{props.content}</button>
    )
}

export default connect()(orangeButton);