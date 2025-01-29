const mongoose = require("mongoose");

const users = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  refreshToken: [String],
  budget: {
    type: Number,
    required: false,
    default: 0
  }
});

module.exports = mongoose.model("User", users);
