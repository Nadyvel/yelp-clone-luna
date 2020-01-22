//------------------ fetch users

export const fetchUsers = () => async (dispatch, getState) => {
    const headers = new Headers({})
    const config = {
        method: "GET",
        headers
    };
    const response = await fetch('https://luna-aquarius.propulsion-learn.ch/api/users/list/', config);
    const data = await response.json();
    const action = {
        type: 'users',
        payload: data
    };
    dispatch(action)
};