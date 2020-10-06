import React from "react";
import { useForm } from "react-hook-form";
import ReactLeafletSearch from "react-leaflet-search";
import { useDispatch } from "react-redux";
import { saveLocation } from "../../redux/api";
import { Popup } from "react-leaflet";

import "./index.scss";

const Search = () => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data, event) => {
    event.preventDefault();
    const location = {
      title: data["title"],
      description: data["description"],
      address: data["address"],
      latitude: data["lat"],
      longitude: data["lng"],
    };
    return dispatch(saveLocation(location));
  };

  const myPopup = (SearchInfo) => (
    <Popup>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="lat"
          readOnly
          value={SearchInfo.latLng["lat"]}
          hidden
          ref={register({ required: true })}
        />
        <input
          name="lng"
          readOnly
          value={SearchInfo.latLng["lng"]}
          hidden
          ref={register({ required: true })}
        />
        <input
          name="address"
          readOnly
          value={SearchInfo.info}
          hidden
          ref={register({ required: true })}
        />
        <input
          className={`input ${errors.title ? "error" : ""}`}
          name="title"
          placeholder="Title"
          ref={register({ required: true })}
        />
        <textarea
          className={`textarea ${errors.description ? "error" : ""}`}
          name="description"
          placeholder="Description"
          ref={register({ required: true })}
        />
        <p className="info">
          {SearchInfo.latLng["lat"]} lng:{SearchInfo.latLng["lng"]}
        </p>
        <p className="info">{SearchInfo.info}</p>
        <button type="submit" className="button submit">
          Click me
        </button>
      </form>
    </Popup>
  );

  return (
    <ReactLeafletSearch
      position="topleft"
      inputPlaceholder="Search for a place..."
      openSearchOnLoad={true}
      showMarker={true}
      showPopup={true}
      closeResultsOnClick={true}
      provider="OpenStreetMap"
      popUp={myPopup}
    />
  );
};

export default Search;
