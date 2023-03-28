const User = require("../models/user.model");
const errorHandler = require("./../helpers/dbErrorHandler");
const _ = require("lodash");

const create = async (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  console.log(user);
  try {
    const response = await user.save();
    return res.status(200).json({
      message: "Successfully signed up!",
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const list = async (req, res) => {
  try {
    let users = await User.find().select("name email updated created");
    res.json(users);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const userById = async (req, res, next, id) => {
  try {
    let user = await User.findById(id);
    if (!user)
      return res.status("400").json({
        error: "User not found",
      });
    req.profile = user;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve user",
    });
  }
};

const read = (req, res) => {
  const user = req.profile;
  user.hashed_password = undefined;
  user.salt = undefined;
  return res.json(user);
};
const update = async (req, res, next) => {
  try {
    let user = req.profile;
    user = _.extend(user, req.body);
    user.updated = Date.now();
    await user.save();
    user.hashed_password = undefined;
    user.salt = undefined;
    res.json(user);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const remove = async (req, res, next) => {
  try {
    let user = req.profile;
    await User.deleteOne({ hashed_password: user.hashed_password });
    user.hashed_password = undefined;
    user.salt = undefined;
    res.json(user);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

module.exports = { create, userById, read, list, remove, update };
