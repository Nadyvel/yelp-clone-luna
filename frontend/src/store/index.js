import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";

const initialState = {
  user: [
    {
      username: null,
      first_name: null,
      last_name: null,
      email: null,
      password: null,
      location: null,
      profile_description: null
    }
  ],
  restaurant: [
    {
      restaurant_name: null
    }
  ]
};

const userReducer = (state = initialState, action) => {
  if (action.type === "userDetails") {
    return {
      ...state,
      userDetails: action.payload
    };
  }
  return state;
};

const restaurantReducer = (state = initialState, action) => {
  if (action.type === "createRestaurant") {
    return {
      ...state,
      restaurant: [action.payload, ...state.restaurant]
    };
  }
  return state;
};

const rootReducer = combineReducers({
  userReducer,
  restaurantReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.log("Store: ", store.getState());
});
export default store;
