import * as types from "../actions/types";

const initialState = {
  locations: [],
  error: null,
  loading: false
};

const auth = (state = initialState, action) => {
  if (action.type === types.LOCATION_START) {
    return {
      ...state,
      error: null,
      loading: true
    };
  }
  if (action.type === types.LOCATION_END) {
    return {
      ...state,
      error: null,
      loading: false
    };
  }
  if (action.type === types.LOCATION_SUCCESS) {
    return {
      ...state,
      error: null,
      loading: false,
      locations: action.locations
    };
  }
  if (action.type === types.SAVE_LOCATION_SUCCESS) {
    const newLocation = {
      ...action.locationData,
      id: action.id
    };
    return {
      ...state,
      loading: false,
      locations: state.locations.concat(newLocation),
      error: null
    };
  }
  if (action.type === types.LOCATION_FAIL) {
    return {
      ...state,
      error: action.error.message,
      loading: false
    };
  }
  return state;
};

export default auth;
