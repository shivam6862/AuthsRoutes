import React, { useState } from "react";
import styles from "../auth/Singnin.module.css";
import { useNavigate } from "react-router-dom";
import { reset } from "./api-auth";

import { useNotification } from "../../store/useNotification";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const { NotificationHandler } = useNotification();

  const handleChange = () => (event) => {
    setEmail(event.target.value);
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    var validEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(validEmail)) {
      NotificationHandler("Fill the correct email..", "Error");
      return;
    }
    NotificationHandler("We are checking!", "Info");
    reset(email).then((data) => {
      if (data == undefined) {
        NotificationHandler("Sorry for inconvenience server error ! ", "Error");
        return;
      }
      if (data.error) {
        NotificationHandler(data.error, "Error");
      } else {
        NotificationHandler(data.message, "Success");
        navigate("/");
      }
    });
  };

  return (
    <div className={styles.card}>
      <h2>Reset Passwword</h2>
      <div className={styles.form}>
        <input
          placeholder="Email"
          type="email"
          onChange={handleChange()}
          value={email}
        />
        <button className={styles["submit-button"]} onClick={clickSubmit}>
          SUBMIT
        </button>
      </div>
    </div>
  );
}
