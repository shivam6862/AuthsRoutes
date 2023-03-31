import React, { useEffect } from "react";
import { read } from "../authintication/user/api-user";
import { useNotification } from "../store/useNotification";

const UserProtected = () => {
  const token = JSON.parse(sessionStorage.getItem("jwt"));
  console.log(token);
  console.log(token["token"]);
  console.log(token.user["_id"]);

  const { NotificationHandler } = useNotification();

  const signal = null;
  useEffect(() => {
    read(token.user["_id"], token["token"], signal).then((data) => {
      if (data == undefined) {
        NotificationHandler("Sorry for inconvenience server error ! ", "Error");
        return;
      }
      if (data.error) {
        NotificationHandler("You are unauthinticated", "Error");
      } else {
        NotificationHandler("You are authinticated", "Success");
      }
    });
  }, []);

  return (
    <div className="userProtected">
      <div>This is a user Protected route !</div>
    </div>
  );
};

export default UserProtected;
