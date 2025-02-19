const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const handleLogger = require("./middleware/handleLogger");
const app = express();
const expressWinston = require("express-winston");
const cookieParser = require("cookie-parser");
const corsOptions = require("./middleware/corsOptions");
const { connectDB } = require("./config/connectDB.js");
const verifyJwt = require("./middleware/verifyJwt.js");
const fileUpload = require("express-fileupload");
require("dotenv").config();

// LOGGER
app.use(expressWinston.logger(handleLogger.successLogs));
// koneksi FE ke BE lancar

mongoose.set("autoCreate", false)
app.use(cors(corsOptions));
connectDB();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

// MIDDLEWARE FOR FILE UPLOAD

// COOKIE - PARSER
app.use(cookieParser());

// Public Routes
app.use("/api/v1/auth", require("./routes/authRoute"));
app.use("/api/v1/products", require("./controller/Products/getAllProducts"))
app.use("/api/v1/products/:id", require("./controller/Products/getProductById"))

// Verify User
app.use("*", verifyJwt);

// PROTECTED ROUTES
app.use("/api/v1/products", require("./routes/productsRoute"));
app.use("/api/v1/user/profile", require("./routes/profileRoute"));
app.use("/api/v1/user/cart",require("./routes/cartRoute"))

// ERROR LOGGER
app.use(expressWinston.errorLogger(handleLogger.errorLogs));

module.exports = app;
