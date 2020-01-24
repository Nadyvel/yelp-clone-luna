const initialState = {
    myComments: [],
    myRestaurants: []
};

export const myCommentsReducer = function (state = initialState, action) {
    switch (action.type) {
        case 'MY_COMMENTS':
            return {
                ...state,
                myComments: action.payload
            }

        case 'MY_RESTAURANTS':
            return {
                ...state,
                myRestaurants: action.payload
            }

        default:
            return state;
        }
}