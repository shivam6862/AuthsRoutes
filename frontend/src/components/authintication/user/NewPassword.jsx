import React, { useState, useEffect } from "react";
import styles from "../auth/Singnin.module.css";
import { useNavigate } from "react-router-dom";
import { postResetPassword } from "./api-auth";

import { useNotification } from "../../store/useNotification";
import { useParams } from "react-router-dom";
import { useProtectedResources } from "./useProtectedResources";
import LoadingSpinner from "../../ui/LoadingSpinner";

export default function NewPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [userNotFound, setUserNotFound] = useState(false);
  const { token } = useParams();
  var {
    isLoading: isLoading,
    data: data,
    setData: setData,
  } = useProtectedResources(
    `${import.meta.env.VITE_REACT_BACKEND_URL}/auth/getnewpassword/${token}`,
    null
  );
  const { NotificationHandler } = useNotification();
  console.log(data);

  useEffect(() => {
    if (data != null) {
      NotificationHandler(data.message, data.type);
      if (data.message == "User not found!") setUserNotFound(true);
    } else {
      setUserNotFound(false);
    }
  }, [data]);

  const handleChange = () => (event) => {
    setPassword(event.target.value);
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    if (password.length < 0) {
      NotificationHandler("Password length is small...", "Error");
      return;
    }
    NotificationHandler("We are Updating!", "Info");
    postResetPassword({
      password,
      passwordToken: data.passwordToken,
      userId: data.userId,
    }).then((datas) => {
      if (datas == undefined) {
        NotificationHandler("Sorry for inconvenience server error ! ", "Error");
        return;
      }
      if (datas.error) {
        NotificationHandler(datas.error, "Error");
      } else {
        NotificationHandler(datas.message, "Success");
        navigate("/");
      }
    });
  };

  return (
    <div className={styles.card}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {userNotFound ? (
            <>
              <h2>User not Found</h2>
              <div className={styles.form}>
                <h3> You are not authintication to change the password</h3>
              </div>
            </>
          ) : (
            <>
              <h2>New Passwword</h2>
              <div className={styles.form}>
                <input
                  placeholder="Password"
                  type="text"
                  onChange={handleChange()}
                  value={password}
                />
                <button
                  className={styles["submit-button"]}
                  onClick={clickSubmit}
                >
                  SUBMIT
                </button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
