export const meAction = () => (dispatch, getState) => {
    const token = getState().loginReducer.tokens.access
    const myHeaders = new Headers({
        "content-type": "application/json",
        "Authorization": "Bearer " + token
    });

    const config = {
        method: 'GET',
        headers: myHeaders,
    };
    
    fetch("https://luna-aquarius.propulsion-learn.ch/api/me/", config)
    .then((response) => response.json())
    .then((data) => {
        console.log("My data", data);  
        
        //this.props.dispatch(myPostsAction(data))
        dispatch(
            {
                type: 'MY_INFO',
                payload: data
            }
        )
    })
};