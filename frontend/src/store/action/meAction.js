export const meAction = () => async (dispatch, getState) => {

    const token = getState().loginReducer.tokens.access
    const myHeaders = new Headers({
        "content-type": "application/json",
        "Authorization": "Bearer " + token
    });

    const config = {
        method: 'GET',
        headers: myHeaders,
    };
    
    const response = await fetch("https://luna-aquarius.propulsion-learn.ch/api/me/", config);
    const data = await response.json(); 
    const action = {
        type: 'MY_INFO',
        payload: data,
    };
    dispatch(action)    
};


///api/reviews/user/<int:user_id>/    reviews of a single user
