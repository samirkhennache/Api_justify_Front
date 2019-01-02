import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

const url = " http://localhost:3001/api/login";
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
    axios.post(url, data).then(res => {
      //localStorage.setItem("token", res.headers["x-access-token"]);
      sessionStorage.setItem("token", res.headers["x-access-token"]);
      this.props.history.push(`/home`);
    });
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
              // autoComplete="email"
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
              onChange={this.handleChange}
              // autoComplete="current-password"
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Se connecter
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default Login;
