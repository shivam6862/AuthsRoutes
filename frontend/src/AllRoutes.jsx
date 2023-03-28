import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/authintication/auth/PrivateRoute";
import Home from "./components/home/Home";
import UserProtected from "./components/userProtected/UserProtected";
import Pagenotfound from "./components/pageNotFound/Pagenotfound";
import Signin from "./components/authintication/auth/Signin";
import Signup from "./components/authintication/user/SignUp";

const routes = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/sign-in",
    Component: Signin,
  },
  {
    path: "/sign-up",
    Component: Signup,
  },
  {
    path: "/userprotected",
    private: true,
    Component: UserProtected,
  },
  {
    path: "*",
    Component: Pagenotfound,
  },
];
const AllRoutes = () => {
  return (
    <div className="main-components">
      <div className="routes">
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={
                  route.private ? (
                    <PrivateRoute Component={route.Component} />
                  ) : (
                    <route.Component></route.Component>
                  )
                }
              ></Route>
            );
          })}
        </Routes>
      </div>
    </div>
  );
};

export default AllRoutes;
