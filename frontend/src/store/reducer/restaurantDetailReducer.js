const initialState = {
    singleRestaurant: []
}

export const restaurantDetailReducer = (state = initialState, action) => {
    if (action.type === "singleRestaurant") {
        return {
            ...state,
            singleRestaurant: action.payload
        };
    }
    return state;
};