//------------------ fetch restaurant Details

export const fetchSingleRestaurantDetails = (restaurant_id) => async (dispatch, getState) => {
    const token = getState().loginReducer.tokens.access;
    const headers = new Headers({
        "content-type": "application/json",
        "Authorization": "Bearer " + token
    });
    const config = {
        method: "GET",
        headers
    };
    const response = await fetch(`https://luna-aquarius.propulsion-learn.ch/api/restaurants/${restaurant_id}`, config);
    const data = await response.json();
    const action = {
        type: 'singleRestaurant',
        payload: data
    };
    dispatch(action)
};