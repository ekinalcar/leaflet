import { combineReducers } from "redux";
import locationReducer from "../reducers/location";

export const rootReducer = combineReducers({
  locations: locationReducer,
});
