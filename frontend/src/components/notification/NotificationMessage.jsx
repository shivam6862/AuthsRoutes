import React from "react";
import { useState } from "react";
import classes from "./NotificationMessage.module.css";
import NotificationContext from "../store/Notification-context";
import { useContext } from "react";

const NotificationMessage = () => {
  const notificationCtx = useContext(NotificationContext);
  const [width, setWidth] = useState(100);

  const deleteNoti = (id) => {
    notificationCtx.onDelete(id);
  };

  const interval = setInterval(() => {
    if (notificationCtx.typeMessage.length > 0) {
      notificationCtx.onDelete(notificationCtx.typeMessage[0].id);
    }
    clearInterval(interval);
  }, 3000);

  return (
    <div className={`${classes.container} ${classes.buttomright}`}>
      {notificationCtx.typeMessage.map((data, i) => (
        <div
          key={i}
          className={`${classes.notification} ${classes.buttomright}`}
          style={{ backgroundColor: data.type }}
        >
          <button onClick={() => deleteNoti(data.id)}>X</button>
          <div>
            <p className={classes.title}>{data.message}</p>
          </div>
          <div
            className={`${classes.lowerboder}`}
            style={{ width: width + "%" }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default NotificationMessage;
