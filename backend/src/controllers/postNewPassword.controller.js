const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const { expressjwt } = require("express-jwt");
const config = require("../../config/config");

const postNewPassword = (req, res, next) => {
  const newPassword = req.body.password;
  const userId = req.body.userId;
  const passwordToken = req.body.passwordToken;

  User.findOne({
    resetToken: passwordToken,
    resetTokenExpiration: { $gt: Date.now() },
    _id: userId,
  })
    .then((resetUser) => {
      resetUser.password = newPassword;
      resetUser.resetToken = undefined;
      resetUser.resetTokenExpiration = undefined;
      return resetUser.save();
    })
    .then((ok) => {
      return res.status(401).send({
        message: `Password reset suucessfully!`,
      });
    })
    .catch((err) => {
      return res.status(401).send({
        error: `Please try again!`,
      });
    });
};
module.exports = postNewPassword;
