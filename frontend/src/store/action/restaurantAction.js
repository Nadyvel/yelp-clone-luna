//------------------ fetch restaurants

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


//------------------ fetch 4 restaurants

export const fetch4RestaurantDetails = () => async (dispatch, getState) => {
    const token = getState().loginReducer.tokens.access;
    const headers = new Headers({
        "content-type": "application/json",
    });
    const config = {
        method: "GET",
        headers
    };
    const response = await fetch('https://luna-aquarius.propulsion-learn.ch/api/restaurants/home/', config);
    const data = await response.json();
    const action = {
        type: 'restaurantDetails',
        payload: data
    };
    dispatch(action)
};
