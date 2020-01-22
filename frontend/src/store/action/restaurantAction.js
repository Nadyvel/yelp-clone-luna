//------------------ fetch restaurant Details

export const fetchRestaurantDetails = () => async (dispatch, getState) => {
    const token = getState().loginReducer.tokens.access;
    const headers = new Headers({
        "content-type": "application/json",
        "Authorization": "Bearer " + token
    });
    const config = {
        method: "GET",
        headers
    };
    const response = await fetch('https://luna-aquarius.propulsion-learn.ch/api/restaurants/', config);
    const data = await response.json();
    const action = {
        type: 'restaurantDetails',
        payload: data
    };
    dispatch(action)
};
