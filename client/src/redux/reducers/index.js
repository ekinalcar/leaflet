import { combineReducers } from "redux";
import locationReducer from "../reducers/location";

export default combineReducers({
  location: locationReducer,
});
