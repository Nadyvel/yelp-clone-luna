const initialState = {
    username: null,
    first_name: null,
    last_name: null,
    email: null,
    password: null,
    location: null,
    profile_description: null
}

export const userReducer = (state = initialState, action) => {
    if (action.type === "userDetails") {
        return {
            ...state,
            userDetails: action.payload
        };
    }
    return state;
};