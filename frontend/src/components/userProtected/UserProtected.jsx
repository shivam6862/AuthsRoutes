import React, { useEffect } from "react";
import { read } from "../authintication/user/api-user";
import { useNotification } from "../store/useNotification";
import { useNavigate } from "react-router-dom";
import auth from "../authintication/auth/auth-helper";

const UserProtected = () => {
  const token = JSON.parse(sessionStorage.getItem("jwt"));

  const { NotificationHandler } = useNotification();
  const navigate = useNavigate();
  const signal = null;
  useEffect(() => {
    read(token.user["_id"], token["token"], signal).then((data) => {
      if (data == undefined) {
        NotificationHandler("Sorry for inconvenience server error ! ", "Error");
        return;
      }
      if (data.error) {
        NotificationHandler(data.error, "Error");
        auth.userChangedData();
        navigate("/sign-in");
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
