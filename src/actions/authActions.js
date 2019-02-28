import axios from "axios";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import url from "../utils/config";
import jwtDecode from "jwt-decode";
import { SET_CURRENT_USER, CHECK_SESSION } from "./types";

import { Provider } from "react-redux";
export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    response: user
  };
};

const auth = response => {
  return {
    type: CHECK_SESSION,
    response: response
  };
};

export const checkAuth = () => dispatch => {
  return axios
    .get(url.check, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Expose-Headers": "x-access-token",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`
      }
    })
    .then(res => {
      dispatch(auth(true));
    })
    .catch(err => dispatch(auth(false)));
};
export const logout = () => dispatch => {

  // setAuthorizationToken(false);
  dispatch(setCurrentUser({}));
};

export const createAccount = (data, callback) => dispatch => {
  return axios.post(url.register, data).then(res => {
    const token = res.headers["x-access-token"];
    sessionStorage.setItem("token", token);
    dispatch(setCurrentUser(jwtDecode(token)));
    callback.history.push("/home");
  });
};
export const login = (data, callback) => dispatch => {
  return axios.post(url.auth, data).then(res => {
    const token = res.headers["x-access-token"];
    sessionStorage.setItem("token", token);
    // setAuthorizationToken(token);
    dispatch(setCurrentUser(jwtDecode(token)));

    callback.history.push("/home");
  });
};
export const loginFaceBook = (data, callback) => dispatch => {
  axios
    .post(url.signInFacebook, {
      userID: data.userID,
      email: data.email
    })
    .then(res => {
      const token = res.headers["x-access-token"];
      sessionStorage.setItem("token", token);
      dispatch(setCurrentUser(jwtDecode(token)));
      callback.history.push("/home");
    });
};
export const loginGoogle = (data, callback) => dispatch => {
  return axios
    .post(
      url.signInGoogle,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Expose-Headers": "x-access-token",
          Authorization: `${data.tokenId}`
        }
      }
    )
    .then(res => {
      const token = res.headers["x-access-token"];
      sessionStorage.setItem("token", token);
      dispatch(setCurrentUser(jwtDecode(token)));
      callback.history.push("/home");
    });
};
