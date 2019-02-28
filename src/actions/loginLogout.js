import * as types from "./types";
export const login = () => {
  return {
    type: types.LOGIN,
    payload: true
  };
};
export const logout = () => {
  return {
    type: types.LOGOUT,
    payload: false
  };
};
