const mongoose = require("mongoose");
const handleLogger = require("../middleware/handleLogger");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    handleLogger.manualLogs.error(
      `name: ${err.name},\t message: ${err.message}\n, code: ${err.code},\t syscall: ${err.syscall},\t hostname: ${err.hostname},\n details:${err.stack}`
    );
  }
};

module.exports = connectDB;
