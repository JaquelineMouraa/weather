import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "../templates/Home";
import Weather from "../templates/Weather";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component = { Home }  path="/" exact />
      <Route component = { Weather }  path="/weather" />
    </BrowserRouter>
  );
};

export default Routes