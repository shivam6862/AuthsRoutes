const express = require("express");
const authCtrl = require("../controllers/auth.controller");
const resetPassword = require("../controllers/resetPassword.controller");
const getNewPassword = require("../controllers/getNewPassword.controller");
const postnewPassword =require('../controllers/postNewPassword.controller');

const router = express.Router();

router.route("/auth/signin").post(authCtrl.signin);
router.route("/auth/reset").post(resetPassword);
router.route("/auth/getnewpassword/:token").get(getNewPassword);
router.route("/auth/postnewpassword").post(postnewPassword);

module.exports = router;
