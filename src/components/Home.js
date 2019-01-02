import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

class Home extends Component {
  state = {};
  onClick() {
    sessionStorage.clear();
  }
  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <Button
          component={Link}
          to="/"
          variant="contained"
          onClick={this.onClick}
        >
          Se deconnecter
        </Button>
      </div>
    );
  }
}

export default Home;
