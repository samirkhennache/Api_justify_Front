import React from "react";
import CreateAcount from "./CreateAcount";
import Login from "./Login";

const UserConnexion = props => (
  <div className="UserConnexion">
    <CreateAcount {...props} />
    <Login {...props} />
  </div>
);

export default UserConnexion;
