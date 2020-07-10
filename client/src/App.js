import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import Header from "./components/Header/";
import Footer from "./components/Footer/";
import Map from "./components/Map/";

const App = () => (
  <>
    <Header />
    <Switch>
      <Route path="/" exact component={Map} />
      <Redirect to="/" />
    </Switch>
    <Footer />
  </>
);

export default withRouter(App);
