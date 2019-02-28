import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { connect } from "react-redux";
import { createAccount } from "../actions/authActions";
import url from "../utils/config";

class CreateAccount extends Component {
  state = {};
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmitCreate = e => {
    const { lastName, firstName, email, password } = this.state;
    e.preventDefault();
    const userData = {
      lastName,
      firstName,
      email,
      password
    };

    const { createAccount } = this.props;
    createAccount(userData, this.props);
  };

  render() {
    return (
      <form onSubmit={this.onSubmitCreate}>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              id="outlined-name"
              label="Name"
              name="lastName"
              value={this.state.name}
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-name"
              label="FirstName"
              name="firstName"
              value={this.state.name}
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-email-input"
              label="Email"
              type="email"
              name="email" // autoComplete="email"
              value={this.state.email}
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
              onChange={this.handleChange} // autoComplete="current-password"
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              S'inscrire
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default connect(
  null,
  { createAccount }
)(CreateAccount);
