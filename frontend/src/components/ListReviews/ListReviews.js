import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchReviews} from "../../store/action/reviewActions";
import ReviewCard from "../ReviewCard/ReviewCard";
import './ListReviews.css';
import withRouter from "react-router-dom/es/withRouter";
import {fetchUsers} from "../../store/action/usersAction";

const ListReviews = (props) => {
    const restaurant_id = props.match.params.id || 1;
    useEffect(() => {
        props.dispatch(fetchReviews(restaurant_id))
        props.dispatch(fetchUsers())
    }, []);
    return (
        <div className="ListReviews-Container">
            {
                props.reviews.length > 0 &&
                props.reviews.map((review, index) => {
                    return <ReviewCard key={index} review={review} length={props.reviews.length} users={props.users[0].image}/>
                })
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        reviews: state.reviewReducer.reviews,
        users: state.userReducer.users
    };
};

export default connect(mapStateToProps)(withRouter(ListReviews));