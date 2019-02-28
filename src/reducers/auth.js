import { SET_CURRENT_USER, CHECK_SESSION } from "../actions/types";
import isEmpty from "lodash/isEmpty";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.response),
        user: action.response
      };
    case CHECK_SESSION:
      return { ...state, isAuthenticated: action.response };

    default:
      return state;
  }
};
