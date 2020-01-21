import React from "react";
import RestaurantBanner from "../RestaurantBanner/RestaurantBanner";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import {connect} from "react-redux";

const LandingPage = () => {
    return (
        <div>
            <RestaurantBanner/>
            {
                [1, 2, 3, 4].map(card => {
                        return <RestaurantCard/>
                    }
                )}
            }
        </div>
    )
}

export default connect()(LandingPage);