import React from "react";
import ReactLeafletSearch from "react-leaflet-search";
import { Popup } from "react-leaflet";

const Search = ({ clickHandler }) => {
  const myPopup = (SearchInfo) => (
    <Popup>
      <div>
        <p>I am a custom popUp</p>
        <p>
          latitude and longitude from search component: lat:
          {SearchInfo.latLng["lat"]} lng:{SearchInfo.latLng["lng"]}
        </p>
        <p>Info from search component: {SearchInfo.info}</p>
        <button
          type="button"
          onClick={(event) => clickHandler(event, SearchInfo)}
        >
          Click me
        </button>
      </div>
    </Popup>
  );

  return (
    <ReactLeafletSearch
      position="topleft"
      provider="OpenStreetMap"
      popUp={myPopup}
    />
  );
};

export default Search;
