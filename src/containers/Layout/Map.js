import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions";

import MyMap from "../../components/MyMap";
import Loader from "../../components/UI/Loader";

class Map extends Component {
  state = {
    lat: 37.7749,
    lng: -122.4194,
    zoom: 10,
    added: []
  };

  componentDidMount = () => {
    this.props.fetchLocations();
  };

  handleClick = (event, addressInfo) => {
    event.preventDefault();
    const newAdded = [...this.state.added];
    const lat = addressInfo.latLng.lat;
    const lng = addressInfo.latLng.lng;
    newAdded.push({
      coordinates: {
        lat: lat,
        lnt: lng
      },
      address: addressInfo.info
    });
    this.setState({ added: newAdded });
  };

  render() {
    const { lat, lng, zoom, added } = this.state;
    const { loading, locations } = this.props;

    if (loading) {
      return <Loader />;
    } else {
      return (
        <MyMap
          lat={lat}
          lng={lng}
          zoom={zoom}
          added={added}
          handleClick={this.handleClick}
          locations={locations}
        />
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    error: state.location.error,
    loading: state.location.loading,
    locations: state.location.locations
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLocations: () => dispatch(actions.fetchLocations())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
