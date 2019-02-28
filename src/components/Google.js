import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import queryString from "query-string";
import { connect } from "react-redux";
import { loginGoogle } from "../actions/authActions";

class Google extends Component {
  state = {};
  onRequest = () => {
    console.log("coucouc");
  };

  responseGoogle = response => {
    console.log(response);
    if (response.tokenId) {
      const { loginGoogle } = this.props;
      loginGoogle(response, this.props);
      // this.props.history.replace("/home");
    }
  };

  // redirect = { render(( props) => <Redirect to={url} />};
  componentWillMount() {
    console.log(this.props);

    const query = queryString.parse(this.props.location.search);
    console.log(query.token);

    if (query.token) {
      sessionStorage.setItem("token", query.token);
      this.props.login();
      this.props.history.push(`/home`);
    }
  }
  render() {
    return (
      <div>
        <GoogleLogin
          clientId="318965421786-d7tvq3qujfggrpduhsj0bj9bsapsghqq.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { loginGoogle }
)(Google);
