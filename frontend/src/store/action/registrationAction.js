export const registrationAction = (email) => async (dispatch, getState) => {
    console.log(email)
    const myHeaders = new Headers({
        "content-type": "application/json",
    });

    const body = {
        "email": email,
    }

    const config = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(body)
    };

    const response = await fetch('https://luna-aquarius.propulsion-learn.ch/api/registration/', config);
    const data = await response.json();
    return response
    console.log('registered: ', data)
};