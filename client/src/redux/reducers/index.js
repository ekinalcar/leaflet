import { combineReducers } from "redux";
import locationReducer from "../reducers/location";

/*export default combineReducers({
  locations: locationReducer,
});
*/
export const rootReducer = combineReducers({
  locations: locationReducer,
});
