import { combineReducers } from "redux";
import {userReducer} from "./userReducer";
import {restaurantReducer} from "./restaurantReducer";
import loginReducer from './loginReducer';
import {reviewReducer} from "./reviewReducer";
import {restaurantDetailReducer} from "./restaurantDetailReducer";
import { meReducer } from "./meReducer";

const rootReducer = combineReducers({
  userReducer,
  restaurantReducer,
  loginReducer,
  reviewReducer,
  restaurantDetailReducer,
  meReducer,
});

export default rootReducer