const express = require("express");
const router = express.Router();
const profileController = require("../controller/profileController.js");
const verifyJwt = require("../middleware/verifyJwt.js");


router
  .get("/", profileController.getUserProfile)
  .put("/", profileController.updateUsernameEmail);

module.exports = router;
