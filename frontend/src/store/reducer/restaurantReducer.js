const initialState = {
    restaurants: []
}

export const restaurantReducer = (state = initialState, action) => {
    if (action.type === "restaurantDetails") {
        return {
            ...state,
            restaurants: action.payload
        };
    }
    return state;
};