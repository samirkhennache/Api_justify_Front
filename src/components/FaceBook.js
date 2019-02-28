import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import queryString from "query-string";
import { connect } from "react-redux";
import { loginFaceBook } from "../actions/authActions";

class FaceBook extends Component {
  state = {
    userID: "",
    email: "",
    name: "",
    picture: "",
    accessToken: ""
  };
  goToHome() {
    console.log("redirection", this.props.isAuthenticated);
  }
  componentClicked = () => {
    console.log("clicked");
  };
  responseFacebook = response => {
    console.log(response);
    this.setState({
      userID: response.userID,
      accessToken: response.accessToken,
      name: response.name,
      picture: response.picture.data.url,
      email: response.email
    });
    if (response) {
      const { loginFaceBook } = this.props;
      loginFaceBook(response, this.props);
      
    }
  };
  componentWillMount() {
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
        <FacebookLogin
          appId="750044475362128"
          autoLoad={false}
          textButton="Login with Facebook"
          fields="name,email,picture"
          size="medium"
          icon="fa-facebook"
          callback={this.responseFacebook}
          onClick={this.componentClicked}
        />
      </div>
    );
  }
}
const mapStateToprops = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToprops,
  { loginFaceBook }
)(FaceBook);
