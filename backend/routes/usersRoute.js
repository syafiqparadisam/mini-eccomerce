const express = require("express");
const router = express.Router();
const usersController = require("../controller/usersController.js");

router
  .post("/register", usersController.createNewUser)
  .post("/login", usersController.handleLogin)
  .get("/refresh", usersController.getNewAccessToken);
module.exports = router;
