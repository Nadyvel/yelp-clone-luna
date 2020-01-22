const initialState = {
    reviews: []
}

export const reviewReducer = (state = initialState, action) => {
    if (action.type === "reviews") {
        return {
            ...state,
            reviews: action.payload
        };
    }
    return state;
};