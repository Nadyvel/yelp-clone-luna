import React from "react";
import { connect } from 'react-redux';
import "./InputAndLabel.css"


const InputAndLabel= (props) => { 

    return(

        <div className="formLabels">
            <div className="inputWrapper">
            <label className="labels">{props.label}</label>
            <input name={props.name} value={props.value} onChange={props.onChange}/>

            </div>
        </div>
    )
 }


export default connect()(InputAndLabel);