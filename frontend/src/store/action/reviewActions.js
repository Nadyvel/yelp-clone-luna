//------------------ fetch reviews

export const fetchReviews = (restaurant_id) => async (dispatch, getState) => {
    const headers = new Headers({})
    const config = {
        method: "GET",
        headers
    };
    const response = await fetch(`https://luna-aquarius.propulsion-learn.ch/api/reviews/restaurant/${restaurant_id}`, config);
    const data = await response.json();
    const action = {
        type: 'reviews',
        payload: data
    };
    console.log('data: ', data)
    dispatch(action)
};