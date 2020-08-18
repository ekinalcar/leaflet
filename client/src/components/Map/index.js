import React from "react";
import { Map, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";

import Marker from "../Marker";
import Search from "../Search";

const MyMap = () => {
  const { locations, lat, lng, zoom } = useSelector((state) => state.locations);

  return (
    <>
      <Map
        touchZoom={false}
        doubleClickZoom={false}
        className="map"
        center={[lat, lng]}
        zoom={zoom}
      >
        <Search />
        <TileLayer
          attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations?.length > 0 && <Marker locations={locations} />}
      </Map>
    </>
  );
};

export default MyMap;
