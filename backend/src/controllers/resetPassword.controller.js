const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const { expressjwt } = require("express-jwt");
const config = require("../../config/config");
const crypto = require("crypto");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

dotenv.config();

// const transporter = nodemailer.createTransport(
//   sendgridTransport({
//     auth: {
//       api_key: "Your api key",
//     },
//   })
// );

const resetPassword = (req, res, next) => {
  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      return res.status(401).send({
        error: "Error in generating in randomBytes!.",
      });
    }

    const token = buffer.toString("hex");
    User.findOne({ email: req.body.email })
      .then((user) => {
        if (!user) {
          return res
            .status(401)
            .send({ error: "No account with that email is found!" });
        }
        user.resetToken = token;
        user.resetTokenExpiration = Date.now() + 3600000;
        return user.save();
      })
      .then((result) => {
        // transporter.sendMail({
        //   to: req.body.email,
        //   from: "shivam6862mau@gmail.com",
        //   subject: "Password reset",
        //   html: `
        //     <p>You requested a password reset</p>
        //     <p>Click this <a href="${process.env.FRONTEND_URL}/reset/${token}">link</a> to set a new password.</p>
        //   `,
        // });
        return res.status(400).send({
          message: `Please check your mail ${req.body.email}!`,
        });
      })
      .catch((err) => {
        return res.status(401).send({
          error: "Error occur please try again!.",
        });
      });
  });
};

module.exports = resetPassword ;
