import { combineReducers } from "redux";
import {userReducer} from "./userReducer";
import {restaurantReducer} from "./restaurantReducer";
import loginReducer from './loginReducer';
import {reviewReducer} from "./reviewReducer";
import {restaurantDetailReducer} from "./restaurantDetailReducer";

const rootReducer = combineReducers({
  userReducer,
  restaurantReducer,
  loginReducer,
  reviewReducer,
  restaurantDetailReducer,
});

export default rootReducer