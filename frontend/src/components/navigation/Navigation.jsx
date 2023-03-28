import React from "react";
import { useState, useEffect } from "react";
import Backdrop from "../ui/Backdrop";
import classes from "./Navigation.module.css";
import { Link, useNavigate } from "react-router-dom";

import auth from "../authintication/auth/auth-helper";
import { useNotification } from "../store/useNotification";

const Navigation = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", setDimension);
    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);
  if (screenSize.dynamicWidth >= 1000 && isNavExpanded === true) {
    setIsNavExpanded(false);
  }

  const { NotificationHandler } = useNotification();

  const navigate = useNavigate();
  const signout = () => {
    auth.clearJWT(() => {
      NotificationHandler("Successfully Sign out!", "Success");
      navigate("/sign-in");
    });
  };

  return (
    <div className={classes.positionfixed}>
      <nav className={classes.navigation}>
        <Link to={"/"} className={classes.active1}>
          <div className={classes.logo}>
            <img src="/logo.png" alt="logo"></img>
          </div>
        </Link>
        <button
          className={
            isNavExpanded ? classes.hamburgerchange : classes.hamburger
          }
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <div className={classes.line1}></div>
          <div className={classes.line2}></div>
          <div className={classes.line3}></div>
        </button>

        {isNavExpanded && (
          <Backdrop
            Id="backdrop"
            onClick={() => setIsNavExpanded(!isNavExpanded)}
          />
        )}

        <div
          className={
            isNavExpanded
              ? classes.navigationmenuexpanded
              : classes.navigationmenu
          }
        >
          <ul>
            <li className={classes.first}>
              <Link
                to={"/"}
                className={classes.active}
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                <div className={classes.logo1}>
                  <img src="/logo.png" alt="logo"></img>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to={"/userprotected"}
                className={classes.active}
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                User
              </Link>
            </li>

            {!auth.isAuthenticated() ? (
              <>
                <li>
                  <Link
                    to={"/sign-in"}
                    className={classes.active}
                    onClick={() => {
                      setIsNavExpanded(false);
                    }}
                  >
                    sign-in
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/sign-up"}
                    className={classes.active}
                    onClick={() => {
                      setIsNavExpanded(false);
                    }}
                  >
                    sign-up
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <div
                  className={classes.active}
                  onClick={() => {
                    signout();
                    setIsNavExpanded(false);
                  }}
                >
                  sign-out
                </div>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
