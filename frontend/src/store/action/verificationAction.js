export const verificationAction = props => async (dispatch, getState) => {
    const myHeaders = new Headers({
        "content-type": "application/json",
    });

    const body = {
        email: props.email,
        code: props.validation_code,
        username: props.username,
        location: props.location,
        password: props.password,
        password_repeat: props.password_repeat,
    }

    const config = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(body)
    };

    const response = await fetch('https://luna-aquarius.propulsion-learn.ch/api/registration/validate/', config);
    const data = await response.json();
    return response
}

