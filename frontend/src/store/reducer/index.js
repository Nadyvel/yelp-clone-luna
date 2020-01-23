import { combineReducers } from "redux";
import {userReducer} from "./userReducer";
import {restaurantReducer} from "./restaurantReducer";
import loginReducer from './loginReducer';
import { reviewReducer } from "./reviewReducer";
import { meReducer } from "./meReducer";
import { myCommentsReducer } from "./myCommentsReducer";

const rootReducer = combineReducers({
  userReducer,
  restaurantReducer,
  loginReducer,
  reviewReducer,
  meReducer,
  myCommentsReducer
});

export default rootReducer