import React from "react";
import { useDispatch } from "react-redux";
import MyMap from "./Container";

import { saveLocation } from "../../redux/api";

const Map = () => {
  const dispatch = useDispatch();
  const handleClick = (event, addressInfo) => {
    event.preventDefault();
    const location = {
      title: "TEST TITLE",
      description: addressInfo["info"],
      address: addressInfo["info"],
      latitude: addressInfo["latLng"]["lat"],
      longitude: addressInfo["latLng"]["lng"],
    };
    return dispatch(saveLocation(location));
  };
  return <MyMap handleClick={handleClick} />;
};

export default Map;
