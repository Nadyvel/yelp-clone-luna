const initialState = {
    restaurants: []
    // id: null,
    // name: null,
    // category: null,
    // country: null,
    // street: null,
    // city: null,
    // ZIP: null,
    // website: null,
    // phone: null,
    // email: null,
    // opening_hours: null,
    // price_level: null,
    // image: null
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