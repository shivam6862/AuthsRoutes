import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { NotificationContextProvider } from "./components/store/Notification-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NotificationContextProvider>
      <App />
    </NotificationContextProvider>
  </BrowserRouter>
);
