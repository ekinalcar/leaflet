import React from "react";
import { useForm } from "react-hook-form";
import ReactLeafletSearch from "react-leaflet-search";
import { useDispatch } from "react-redux";
import { saveLocation } from "../../redux/api";
import { Popup } from "react-leaflet";

const Search = () => {
  const { register, handleSubmit, watch, errors } = useForm();
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
        <div>
          <p>
            latitude and longitude from search component: lat:
            {SearchInfo.latLng["lat"]} lng:{SearchInfo.latLng["lng"]}
          </p>
          <p>Info from search component: {SearchInfo.info}</p>
          <button type="submit">Click me</button>
        </div>
      </form>
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
