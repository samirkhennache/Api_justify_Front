import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import axios from "axios";
import { get } from "https";
import url from "../utils/config";
import { checkAuth, logout } from "../actions/authActions";

class Home extends Component {
  state = {};
  onClick() {
    sessionStorage.clear();
    // sessionStorage.removeItem("token");
    // this.props.history.push("/");
    // console.log("coucouc delete");
    this.props.logout();
  }
  getData = props => {
    console.log("click");
    console.log(props);

    axios
      .get(url.home, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Expose-Headers": "x-access-token",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`
        }
      })
      .then(res => props.history.push("/home/application"));
  };
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    this.props.checkAuth();
  }
  render() {
    const { isAuthenticated } = this.props;
    return isAuthenticated ? (
      <div className="Home">
        <h1>Home</h1>
        <Button
          component={Link}
          to="/"
          onClick={this.onClick}
          variant="contained"
        >
          Se deconnecter
        </Button>
        <Button variant="contained" onClick={() => this.getData(this.props)}>
          Get data
        </Button>
      </div>
    ) : null;
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};
export default connect(
  mapStateToProps,
  { checkAuth, logout }
)(Home);
