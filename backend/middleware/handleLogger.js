const winston = require("winston");
const { v4 } = require("uuid");
const { compareAsc } = require("date-fns");

const myFormat = winston.format.printf(({ level, message, timestamp }) => {
  const dates = [new Date()];
  return `TIME: ${dates.sort(compareAsc)}, ID: ${v4()}, \n${message}\n`;
});

const successLogs = {
  level: "warn",
  transports: [
    new winston.transports.Console(),
    // new winston.transports.File({
    //   filename: "logs/apps.log",
    // }),
  ],
  format: winston.format.combine(winston.format.simple(), myFormat),
  meta: false,
  msg: "METHOD: {{req.method}}, ORIGIN: {{req.headers.origin}} URL: {{req.originalUrl}} accept: {{req.headers.accept}} responseTime: {{res.responseTime}}, statusCode: {{res.statusCode}}",
};

const errorLogs = {
  level: "error",
  transports: [
    new winston.transports.Console(),
    // new winston.transports.File({
    //   filename: "logs/error.log",
    // }),
  ],
  format: winston.format.combine(winston.format.simple(), myFormat),
  msg: "name: {{err.name}}, message: {{err.message}}, ORIGIN: {{req.headers.origin}}, StatusCode: {{res.statusCode}}, METHOD: {{req.method}}, responseTime: {{res.responseTime}},\n details: {{err.stack}}",
};

const manualLogs = winston.createLogger({
  level: "error",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: "logs/error.log",
    }),
  ],
  format: winston.format.combine(winston.format.simple(), myFormat),
});

module.exports = { successLogs, errorLogs, manualLogs };
