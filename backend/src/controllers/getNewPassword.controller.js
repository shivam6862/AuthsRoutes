const User = require("../models/user.model");

const getNewPassword = (req, res, next) => {
  const token = req.params.token;
  User.findOne({
    resetToken: token,
    resetTokenExpiration: { $gt: Date.now() },
  })
    .then((user) => {
      if (user == null) {
        return res.status(404).send({
          message: `User not found!`,
          type:"Error"
        });
      }
      return res.status(400).send({
        message: `Reset your Password!`,
        userId: user._id.toString(),
        passwordToken: user.resetToken,
        type:"Success"
      });
    })
    .catch((err) => {
      return res.status(401).send({
        message: `You are not authintication`,
        type:"Error"
      });
    });
};
module.exports = getNewPassword;
