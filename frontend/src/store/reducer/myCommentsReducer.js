const initialState = {
    myComments: []
};

export const myCommentsReducer = function (state = initialState, action) {
    switch (action.type) {
        case 'MY_COMMENTS':
            return {
                ...state,
                myComments: action.payload
            }

        default:
            return state;
        }
}