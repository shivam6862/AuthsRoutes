import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import auth from "./auth-helper";

const PrivateRoute = ({ Component }) => {
  const location = useLocation();
  if (!auth.isAuthenticated()) {
    return <Navigate to="/sign-in" state={{ from: location.pathname }} />;
  }

  return <Component />;
};
export default PrivateRoute;
