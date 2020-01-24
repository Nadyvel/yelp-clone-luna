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

export const myRestaurantsAction = () => async (dispatch, getState) => {
    const user_id = getState().meReducer.meInfo.id
    console.log("state my comment", getState())
       const token = getState().loginReducer.tokens.access;
       const myHeaders = new Headers({
           "content-type": "application/json",
           "Authorization": "Bearer " + token
       });
   
       const config = {
           method: 'GET',
           headers: myHeaders,
       };
       
       const response = await fetch(`https://luna-aquarius.propulsion-learn.ch/api/restaurants/user/${user_id}`, config);
       const data = await response.json(); 
       console.log("my restaurants from fetch", data) 
       const action = {
           type: 'MY_RESTAURANTS',
           payload: data,
       };
       dispatch(action)    
   };



///api/review/comment/<int:user_id>/  comments of a single user
//api/restaurants/user/<int:user_id>/  restaurants the login user created
