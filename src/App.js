import React, { Component } from "react";
import "./App.css";
import UserConnexion from "./components/UserConnexion";
import Home from "./components/Home";
import { Redirect, Route, Switch } from "react-router-dom";

const checkAuth = () => {
  const token = sessionStorage.getItem("token");
  if (!token) return false;
  return true;
};
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        checkAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );
};
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
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/home/application" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
