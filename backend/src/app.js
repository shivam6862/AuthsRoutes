const express = require("express");
const routes = require("./routes");
const db = require("./db/db");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const config = require("../config/config");
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/", userRoutes);
app.use("/", authRoutes);

routes.forEach((route) => app[route.method](route.path, route.handler));

const start = async () => {
  await db.connect(process.env.MONGODB_URL);
  mongoose.Promise = global.Promise;
  mongoose.connect(config.mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  app.listen(config.port, () => {
    console.log("Server is listening on Port ", config.port);
  });
};
start();
