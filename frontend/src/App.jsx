import AllRoutes from "./AllRoutes";
import Navigation from "./components/navigation/Navigation";
import classes from "./App.module.css";
import NotificationMessage from "./components/notification/NotificationMessage";

function App() {
  return (
    <>
      <Navigation />
      <div className={classes.App}>
        <AllRoutes />
        <NotificationMessage />
      </div>
    </>
  );
}

export default App;
