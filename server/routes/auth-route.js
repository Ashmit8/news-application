const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller.js");
const validate = require("../middlewares/validate-middleware");
const User = require("../models/user-model.js");

router.route("/home").get(authControllers.home);
router.post("/register", validate(User), authControllers.register);
router.route("/login").post( authControllers.login);


module.exports = router;