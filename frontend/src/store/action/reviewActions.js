//------------------ fetch reviews

export const fetchReviews = () => async (dispatch, getState) => {
    const headers = new Headers({})
    const config = {
        method: "GET",
        headers
    };
    const response = await fetch('https://luna-aquarius.propulsion-learn.ch/api/reviews/restaurant/1', config);
    const data = await response.json();
    const action = {
        type: 'reviews',
        payload: data
    };
    dispatch(action)
};