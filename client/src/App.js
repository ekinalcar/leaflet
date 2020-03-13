import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import axios from "axios";
import Header from "./containers/Layout/Header";
import Footer from "./containers/Layout/Footer";
import Map from "./containers/Layout/Map";

class App extends Component {
  componentDidMount = async () => {
    const response = await this.callApi();
    console.log(response);
  };
  callApi = async () => {
    const response = await axios("/api/hello");
    if (response.status !== 200) throw Error(response.message);

    return response;
  };
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Map} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default withRouter(App);
