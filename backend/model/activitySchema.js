const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    activity: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    timeDifference: {
      type: String,
      default: "Belum Dikerjakan",
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Activity", activitySchema);
