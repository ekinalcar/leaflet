import * as types from "../actions/types";

export const locationStart = () => {
  return {
    type: types.LOCATION_START,
  };
};

export const locationEnd = () => {
  return {
    type: types.LOCATION_END,
  };
};

export const locationSuccess = (locations) => {
  return {
    type: types.LOCATION_SUCCESS,
    locations,
  };
};

export const locationFail = (error) => {
  return {
    type: types.LOCATION_FAIL,
    error,
  };
};

export const saveLocationSuccess = (id, locationData) => {
  return {
    type: types.SAVE_LOCATION_SUCCESS,
    id,
    locationData,
  };
};
