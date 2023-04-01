import React from "react";
import styles from "../auth/Singnin.module.css";

const UserNotAuth = () => (
  <>
    <h2>User not Found</h2>
    <div className={styles.form}>
      <h3> You are not authintication to change the password</h3>
    </div>
  </>
);

export default UserNotAuth;