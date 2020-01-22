
export const loginAction = (username, password) => async (dispatch, getState) => {
    const myHeaders = new Headers({
        "content-type": "application/json",
    });

    const body = {
        "username": username,
        "password": password
    }

    const config = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(body)
    };
    
    const response = await fetch('https://luna-aquarius.propulsion-learn.ch/api/token/', config);
    const data = await response.json();
    console.log(data)
    const action = {
        type: 'LOGIN_USER',
        payload: data,
    };
    dispatch(action)

};