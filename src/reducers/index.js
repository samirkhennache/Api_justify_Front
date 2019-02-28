import { combineReducers } from "redux";
import logReducer from "./logReducer";
import auth from "./auth";
const rootReducer = combineReducers({
  auth
});

export default rootReducer;
