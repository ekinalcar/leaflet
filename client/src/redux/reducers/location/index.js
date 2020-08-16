import produce from "immer";

import {
  LOCATION_END,
  LOCATION_FAIL,
  LOCATION_START,
  LOCATION_SUCCESS,
  SAVE_LOCATION_SUCCESS,
} from "../../actions/types";

const initialState = {
  locations: [],
  isLoading: false,
  error: null,
  lat: 52.5170365,
  lng: 13.3888599,
  zoom: 4,
};

const locations = produce((draft, action) => {
  const { type } = action;
  if (type === LOCATION_START) {
    draft.error = null;
    draft.isLoading = true;
    return;
  }
  if (type === LOCATION_END) {
    draft.isLoading = false;
    return;
  }

  if (type === SAVE_LOCATION_SUCCESS) {
    const { data } = action;
    draft.locations = [...draft.locations, data];
    draft.error = null;
    return;
  }

  if (type === LOCATION_SUCCESS) {
    const { data } = action;
    draft.locations = data;
    draft.error = null;
    return;
  }
  if (type === LOCATION_FAIL) {
    const { error } = action;
    draft.error = error.message;
    draft.isLoading = false;
    return;
  }
  return draft;
}, initialState);

export default locations;
