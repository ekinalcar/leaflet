import {
  LOCATION_END,
  LOCATION_FAIL,
  LOCATION_START,
  LOCATION_SUCCESS,
  SAVE_LOCATION_SUCCESS,
} from "../types";

export const locationStart = () => {
  return {
    type: LOCATION_START,
  };
};

export const saveLocationSuccess = (data) => {
  return {
    type: SAVE_LOCATION_SUCCESS,
    data,
  };
};

export const locationEnd = () => {
  return {
    type: LOCATION_END,
  };
};

export const locationSuccess = (data) => {
  return {
    type: LOCATION_SUCCESS,
    data,
  };
};

export const locationFail = (error) => {
  return {
    type: LOCATION_FAIL,
    error,
  };
};
