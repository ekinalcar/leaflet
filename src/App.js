import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import Header from "./containers/Layout/Header";
import Footer from "./containers/Layout/Footer";
import Map from "./containers/Layout/Map";

class App extends Component {
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
