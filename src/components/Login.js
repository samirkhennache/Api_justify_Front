import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { connect } from "react-redux";
import { login } from "../actions/authActions";
import FaceBook from "./FaceBook";
import Google from "./Google";
import url from "../utils/config";

class Login extends Component {
  state = {};
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmitLogin = e => {
    const { email, password } = this.state;
    e.preventDefault();
    const data = {
      email,
      password
    };
    const { login } = this.props;
    login(data, this.props);
     
  };

  render() {
    return (
      <form onSubmit={this.onSubmitLogin}>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              id="outlined-email-input"
              label="Email"
              type="email"
              name="email"
              value={
                this.state.email // autoComplete="email"
              }
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-password-input"
              label="Password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
            />{" "}
          </Grid>
          <Grid item container xs={12} spacing={24}>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Se connecter
              </Button>
            </Grid>
            <Grid item xs={12}>
              <FaceBook {...this.props} />
            </Grid>
            <Grid item xs={12}>
              <Google {...this.props} />
            </Grid>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default connect(
  null,
  { login }
)(Login);
