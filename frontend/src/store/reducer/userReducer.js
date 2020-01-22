const initialState = {
    users: []
}

export const userReducer = (state = initialState, action) => {
    if (action.type === "users") {
        return {
            ...state,
            users: action.payload
        };
    }
    return state;
};