// import React from "react";
// import { Redirect, Route } from "react-router-dom";
// import { connect } from "react-redux";

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const { isAuthenticated } = rest;
//   return (
//     <Route
//       {...rest}
//       render={rest =>
//         isAuthenticated === true ? <Component {...rest} /> : <Redirect to="/" />
//       }
//     />
//   );
// };
// const mapStateToprops = state => ({
//   isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(mapStateToprops)(PrivateRoute);

import React from "react";
import { connect } from "react-redux";

export default function(ComposedComponent) {
  class Authenticate extends React.Component {
    componentWillMount() {
      console.log("auth in private route ", this.props.isAuthenticated);

      if (!this.props.isAuthenticated) {
        this.props.history.push("/");
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.props.history.push("/");
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => {
    return {
      isAuthenticated: state.auth.isAuthenticated
    };
  };

  return connect(mapStateToProps)(Authenticate);
}
