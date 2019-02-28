import React, { Component } from "react";
import "./App.css";
import UserConnexion from "./components/UserConnexion";
import { connect } from "react-redux";
import Home from "./components/Home";
import authRequire from "./utils/authRequire";
import { Redirect, Route, Switch } from "react-router-dom";
import queryString from "query-string";
import { checkAuth } from "./actions/authActions";
import axios from "axios";
import url from "./utils/config";
import PrivateRoute from "./utils/authRequire";
import Application from "./components/Application";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={props => <UserConnexion {...props} />}
          />
          <Route exact path="/home" component={PrivateRoute(Home)} />
          <Route
            path="/home/application"
            component={PrivateRoute(Application)}
          />
        </Switch>
      </div>
    );
  }
}

export default connect(
  null,
  { checkAuth }
)(App);
