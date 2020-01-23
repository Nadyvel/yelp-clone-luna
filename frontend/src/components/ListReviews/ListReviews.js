import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchReviews} from "../../store/action/reviewActions";
import ReviewCard from "../ReviewCard/ReviewCard";
import './ListReviews.css';
import withRouter from "react-router-dom/es/withRouter";

const ListReviews = (props) => {
    console.log('props X', props)
    const restaurant_id = props.match.params.id || 1 ;
    useEffect(() => {
        props.dispatch(fetchReviews(restaurant_id))
    }, []);
    console.log('restaurant_id: ', restaurant_id)
    return (
        <div className="ListReviews-Container">
            {
                props.reviews.length > 0 &&
                props.reviews.map((review, index) => {
                    return <ReviewCard key={index} review={review} length={props.reviews.length}/>
                })
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        reviews: state.reviewReducer.reviews
    };
};

export default connect(mapStateToProps)(withRouter(ListReviews));