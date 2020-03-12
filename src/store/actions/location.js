import * as types from "../actions/types";
import axios from "axios";

export const locationStart = () => {
  return {
    type: types.LOCATION_START
  };
};

export const locationSuccess = locations => {
  return {
    type: types.LOCATION_SUCCESS,
    locations
  };
};

export const locationFail = error => {
  return {
    type: types.LOCATION_FAIL,
    error
  };
};

export const fetchLocations = () => {
  return async dispatch => {
    try {
      dispatch(locationStart());

      const response = await axios.get(
        "https://data.sfgov.org/resource/wr8u-xric.json",
        {
          params: {
            $limit: 5
          }
        }
      );
      if (response.data) {
        dispatch(locationSuccess(response.data));
      }
    } catch (err) {
      dispatch(locationFail(err.response.data.error));
    }
  };
};
