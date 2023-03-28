import React, { useState } from "react";
import auth from "./auth-helper";
import { useLocation, Navigate } from "react-router-dom";
import { signin } from "../user/api-auth";
import styles from "./Singnin.module.css";
import { useNotification } from "../../store/useNotification";

export default function Signin() {
  const location = useLocation();
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    redirectToReferrer: false,
  });

  const { NotificationHandler } = useNotification();

  const clickSubmit = (e) => {
    e.preventDefault();
    var validEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (values.email.trim() == "" || values.password.trim() == "") {
      NotificationHandler("Fill the email and password..", "Error");
      return;
    }
    if (!values.email.match(validEmail)) {
      NotificationHandler("Fill the correct email..", "Error");
      return;
    }
    if (values.password.length < 6) {
      NotificationHandler("Password length is small...", "Error");
      return;
    }
    NotificationHandler("We are checking!", "Info");

    const user = {
      email: values.email || undefined,
      password: values.password || undefined,
    };

    signin(user).then((data) => {
      console.log(data);
      if (data == undefined) {
        NotificationHandler("Sorry for inconvenience server error ! ", "Error");
        return;
      }
      if (data.error) {
        NotificationHandler(data.error, "Warn");
        setValues({ ...values, error: data.error });
      } else {
        auth.authenticate(data, () => {
          NotificationHandler("Successfully Sign In!", "Success");
          setValues({ ...values, error: "", redirectToReferrer: true });
        });
      }
    });
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const { from } = location.state || {
    from: {
      pathname: "/",
    },
  };
  const { redirectToReferrer } = values;
  if (redirectToReferrer) {
    return <Navigate to={from} />;
  }

  return (
    <div className={styles.card}>
      <h2>Sign In</h2>
      <div className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          onChange={handleChange("email")}
          value={values.email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={handleChange("password")}
          value={values.password}
        />
        <button className={styles["submit-button"]} onClick={clickSubmit}>
          SUBMIT
        </button>
      </div>
    </div>
  );
}
