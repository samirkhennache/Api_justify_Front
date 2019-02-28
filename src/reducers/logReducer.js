import * as types from "../actions/types";

const initialState = {
  connection: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        connection: action.payload
      };

    case types.LOGOUT:
      return {
        ...state,
        connection: action.payload
      };
    default:
      return state;
  }
};
