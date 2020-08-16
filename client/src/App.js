import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Map from "./components/Map/";

import { fetchLocations } from "./redux/api";

const App = () => {
  const dispatch = useDispatch();
  const fetch = useCallback(() => dispatch(fetchLocations()), [dispatch]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <Switch>
      <Route path="/" exact component={Map} />
    </Switch>
  );
};

export default App;
