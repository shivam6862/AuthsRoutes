import React, { useState } from "react";
import { create } from "./api-user";
import styles from "../auth/Singnin.module.css";
import { useNavigate } from "react-router-dom";

import { useNotification } from "../../store/useNotification";

export default function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    password: "",
    email: "",
    open: false,
    error: "",
  });

  const { NotificationHandler } = useNotification();

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    NotificationHandler("We are saving!", "Info");
    const user = {
      name: values.name || undefined,
      email: values.email || undefined,
      password: values.password || undefined,
    };
    create(user).then((data) => {
      if (data == undefined) {
        NotificationHandler("Sorry for inconvenience server error ! ", "Error");
        return;
      }
      if (data.error) {
        NotificationHandler(data.error, "Error");
        setValues({ ...values, error: data.error });
      } else {
        NotificationHandler(data.message, "Success");
        setValues({ ...values, error: "", open: true });
        navigate("/sign-in");
      }
    });
  };

  return (
    <div className={styles.card}>
      <h2>Sign Up</h2>
      <div className={styles.form}>
        <input
          placeholder="Name"
          type="text"
          onChange={handleChange("name")}
          value={values.name}
        />
        <input
          placeholder="Email"
          type="email"
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
