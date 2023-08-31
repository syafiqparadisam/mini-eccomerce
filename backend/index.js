const express = require("express");
const cors = require("cors");
const handleLogger = require("./middleware/handleLogger");
const app = express();
const tableRouter = require("./routes/tableRoute");
const port = process.env.PORT || 8080;
const registerRouter = require("./routes/usersRoute");
const expressWinston = require("express-winston");
const winston = require("winston/lib/winston/config");
const cookieParser = require("cookie-parser");
const corsOptions = require("./middleware/corsOptions");
const connectDB = require("./config/connectMongoDB");
const mongoose = require("mongoose");
const verifyJwt = require("./middleware/verifyJwt.js");
require("dotenv").config();

// LOGGER
app.use(expressWinston.logger(handleLogger.successLogs));

// koneksi FE ke BE lancar
app.use(cors(corsOptions));

connectDB();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

// COOKIE - PARSER
app.use(cookieParser());

app.get("/hai", (req, res) => {
  res.sendStatus(200);
});

app.use("/api/users", require("./routes/usersRoute.js"));

app.use(verifyJwt);

// PROTECTED ROUTES
app.use("api/users/profile", require("./routes/profileRoute"));

// ERROR LOGGER
app.use(expressWinston.errorLogger(handleLogger.errorLogs));

mongoose.connection.once("open", () => {
  console.log("Connected To MongoDB");
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
