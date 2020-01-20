import React from "react";
import {connect} from "react-redux";

const orangeButton = (props) => {
    return (
        <button>{props.content}</button>
    )
}

export default connect()(orangeButton);