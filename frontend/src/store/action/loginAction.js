
export const loginAction = () => (dispatch, getState) => {
    const token = getState().loginReducer.tokens.access
    const myHeaders = new Headers({
        "content-type": "application/json",
        "Authorization": "Bearer " + token
    });

    // const body = {
    //     "email": state.email,
    //     "password": state.password
    // }

    const config = {
        method: 'POST',
        headers: myHeaders,
        // body: JSON.stringify(body)
    };
    
    fetch("https://motion.propulsion-home.ch/backend/api/auth/token/", config)
    .then((response) => response.json())
    .then((data) => { 
        
        dispatch(
            {
                type: 'LOGIN_USER',
                payload: data
            }
        )
    })
};