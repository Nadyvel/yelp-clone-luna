import React from "react";
import {connect} from "react-redux";
import "./MyRestaurants.css";

const MyRestaurants = props => {
    console.log("myRestaurants from my restaurants", props)
    return (
        <div className="MyRestaurants">
            {props.myRestaruants && props.myRestaruants.map((restaurants, i)=> {
                return <p className="eachComment" key={i}> {restaurants}</p>
            })}
        </div>
    );
};

export default connect()(MyRestaurants);