const express = require("express");
const router = express.Router();
const createNewUser = require("../controller/Auth/createNewUser.js");
const handleLogin = require("../controller/Auth/handleLogin.js");
const getNewAccessToken = require("../controller/Auth/getNewAccessToken.js");
const handleLogout = require("../controller/Auth/handleLogout.js");

router
	.post("/register", createNewUser)
	.post("/login", handleLogin)
	.get("/refresh", getNewAccessToken)
	.delete("/logout", handleLogout);

module.exports = router;
