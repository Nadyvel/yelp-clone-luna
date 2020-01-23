export const myCommentsAction = () => async (dispatch, getState) => {

    const token = getState().loginReducer.tokens.access
    const myHeaders = new Headers({
        "content-type": "application/json",
        "Authorization": "Bearer " + token
    });

    const config = {
        method: 'GET',
        headers: myHeaders,
    };
    
    const response = await fetch(`https://luna-aquarius.propulsion-learn.ch/api/review/comment/${id}`, config);
    const data = await response.json();
    console.log("My comments", data);  
    const action = {
        type: 'MY_COMMENTS',
        payload: data,
    };
    dispatch(action)    
};

///api/review/comment/<int:user_id>/  comments of a single user