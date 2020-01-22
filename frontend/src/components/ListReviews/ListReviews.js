import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchReviews} from "../../store/action/reviewActions";
import ReviewCard from "../ReviewCard/ReviewCard";

const ListReviews = (props) => {
    useEffect(() => {
        props.dispatch(fetchReviews())
    }, []);
    return (
        <div className="ListReviews-Container">
            {
                props.reviews.length > 0 &&
                props.reviews.map((review, index) => {
                    return <ReviewCard key={index} review={review}/>
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

export default connect(mapStateToProps)(ListReviews);