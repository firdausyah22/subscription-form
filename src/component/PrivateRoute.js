import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
       return currentUser ? <Component {...props} /> : <Redirect to="/loginmarketing" />;
      }}
    ></Route>
  );
}

export default PrivateRoute;
