const allowedSite = require("../config/allowedSite");

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedSite.includes(origin)) {
      callback(null, true);
      console.log(origin)
    } else {
      callback(new Error("Sorry You Don't have access to this origin !!"));
    }
  },
  credentials: true,
};

module.exports = corsOptions;
