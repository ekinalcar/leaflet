import {
  locationSuccess,
  locationEnd,
  locationFail,
  locationStart,
  saveLocationSuccess,
} from "../../actions/location";
import axios from "axios";

export const fetchLocations = () => {
  return async (dispatch) => {
    dispatch(locationStart());
    try {
      const response = await axios.get(`http://localhost:3001/api/locations`);
      const {
        data: { data },
      } = response;

      if (data.length > 0) dispatch(locationSuccess(data));
    } catch (err) {
      dispatch(locationFail(err));
    } finally {
      return dispatch(locationEnd());
    }
  };
};

export const saveLocation = (locationData) => {
  return async (dispatch) => {
    dispatch(locationStart());
    try {
      const response = await axios.post(
        `http://localhost:3001/api/locations`,
        locationData
      );
      const {
        status,
        statusText,
        data: { data },
      } = response;
      if (status === 201 && statusText === "Created") {
        dispatch(saveLocationSuccess(data));
      }
    } catch (err) {
      dispatch(locationFail(err));
    } finally {
      return dispatch(locationEnd());
    }
  };
};
