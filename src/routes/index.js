import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../containers/homepage.container";
import Welcome from "../containers/welcome.container";

class AllRoute extends Component {
  render() {
    return (
      <Switch>
        <Route exact strict path="/" component={Welcome} />
        <Route exact strict path="/home" component={Home} />
      </Switch>
    );
  }
}

export default AllRoute;
