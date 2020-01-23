const initialState = {
    meInfo: []
};

export const meReducer = function (state = initialState, action) {
    switch (action.type) {
        case 'MY_INFO':
            return {
                ...state,
                meInfo: action.payload
            }

        default:
            return state;
        }
}
