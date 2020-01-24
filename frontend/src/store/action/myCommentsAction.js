export const myCommentsAction = () => async (dispatch, getState) => {
 const user_id = getState().meReducer.meInfo.id
    const token = getState().loginReducer.tokens.access;
    const myHeaders = new Headers({
        "content-type": "application/json",
        "Authorization": "Bearer " + token
    });

    const config = {
        method: 'GET',
        headers: myHeaders,
    };
    
    const response = await fetch(`https://luna-aquarius.propulsion-learn.ch/api/review/comment/${user_id}`, config);
    const data = await response.json();  
    const action = {
        type: 'MY_COMMENTS',
        payload: data,
    };
    dispatch(action)    
};

///api/review/comment/<int:user_id>/  comments of a single user
