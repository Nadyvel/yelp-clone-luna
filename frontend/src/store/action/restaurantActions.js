//------------------ fetch restaurant Details

export const fetchRestaurantDetails = () => async (dispatch, getState) => {
    const headers = new Headers({})
    const config = {
        method: "GET",
        headers
    };
    console.log('hello')
    const response = await fetch('https://luna-aquarius.propulsion-learn.ch/api/restaurants/', config);
    const data = await response.json();
    const action = {
        type: 'restaurantDetails',
        payload: data
    };
    dispatch(action)
};