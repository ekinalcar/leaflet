import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchLocations, saveLocation } from "../redux/api";

import MyMap from "./MyMap";
import Loader from "./Loader";

class Map extends Component {
  state = {
    lat: 52.5170365,
    lng: 13.3888599,
    zoom: 4,
  };

  componentDidMount = () => {
    this.props.fetchLocations();
  };

  handleClick = (event, addressInfo) => {
    event.preventDefault();

    const lat = addressInfo.latLng.lat;
    const lng = addressInfo.latLng.lng;

    const location = {
      coordinates: {
        lat: lat,
        lng: lng,
      },
      address: addressInfo.info,
    };
    const locationData = {
      locationData: location,
    };
    const allLocations = this.props.locations;

    if (
      !allLocations.some(
        (allLocation) =>
          allLocation.locationData.coordinates.lat === lat &&
          allLocation.locationData.coordinates.lng === lng
      )
    ) {
      this.props.saveLocation(locationData);
    }
  };

  render() {
    const { lat, lng, zoom } = this.state;
    const { loading, locations } = this.props;

    if (loading) {
      return <Loader />;
    } else {
      return (
        <MyMap
          lat={lat}
          lng={lng}
          zoom={zoom}
          handleClick={this.handleClick}
          locations={locations}
        />
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.location.error,
    loading: state.location.loading,
    locations: state.location.locations,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocations: () => dispatch(fetchLocations()),
    saveLocation: (locationData) => dispatch(saveLocation(locationData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
