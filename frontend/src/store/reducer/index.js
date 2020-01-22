import { combineReducers } from "redux";
import {userReducer} from "./userReducer";
import {restaurantReducer} from "./restaurantReducer";
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  userReducer,
  restaurantReducer,
  loginReducer
});

export default rootReducer