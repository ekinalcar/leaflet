import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import Map from "./containers/Layout/Map";

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/" exact component={Map} />
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
}

export default withRouter(App);
