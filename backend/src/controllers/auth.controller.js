const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const { expressjwt } = require("express-jwt");
const config = require("../../config/config");

const signin = async (req, res) => {
  try {
    console.log("signing");
    const user = await User.findOne({
      email: req.body.email,
    });
    if (!user)
      return res.status(401).json({
        error: "User Not found",
      });

    if (!user.authenticate(req.body.password)) {
      return res.status(401).send({
        error: "Email and password don't match.",
      });
    }

    const token = jwt.sign(
      {
        _id: user._id,
      },
      config.jwtSecret
    );

    return res.json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      error: "Could not sign in",
    });
  }
};

// validating JWT Token and setting user's ID in an 'auth' key to the request Object protected routes will use requireSignin
const requireSignin = expressjwt({
  secret: config.jwtSecret,
  algorithms: ["HS256"],
  userProperty: "auth",
});

// to verify that the authenticated user is deleting or updating its own data only
const hasAuthorization = (req, res, next) => {
  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!authorized) {
    return res.status(403).json({
      error: "User is not authorized",
    });
  }
  next();
};

module.exports = { signin, requireSignin, hasAuthorization };
