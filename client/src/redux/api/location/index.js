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
    try {
      dispatch(locationStart());
      const response = await axios.get(
        `https://burger-53f79.firebaseio.com/locations.json`
      );
      if (response.data) {
        const locations = [];
        for (let key in response.data) {
          locations.push({ ...response.data[key], id: key });
        }
        dispatch(locationSuccess(locations));
      } else {
        dispatch(locationEnd());
      }
    } catch (err) {
      dispatch(locationFail(err));
    }
  };
};

export const saveLocation = (locationData) => {
  return async (dispatch) => {
    try {
      dispatch(locationStart());
      const response = await axios.post(
        `https://burger-53f79.firebaseio.com/locations.json`,
        locationData
      );
      if (response.data) {
        dispatch(saveLocationSuccess(response.data.name, locationData));
      } else {
        dispatch(locationEnd());
      }
    } catch (err) {
      dispatch(locationFail(err));
    }
  };
};
