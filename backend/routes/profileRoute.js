const express = require("express");
const router = express.Router();
const ProfileController = require("../controller/profileController.js");

router
  .get("/", ProfileController.getUserProfile)
  .put("/", ProfileController.updateUsernameEmail);

module.exports = router;
