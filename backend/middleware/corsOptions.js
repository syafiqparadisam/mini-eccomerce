const allowedSite = require("../config/allowedSite");

const corsOptions = {
  // origin: (origin, callback) => {
  //   if (allowedSite.includes(origin)) {
  //     callback(null, true);
  //   } else {
  //     callback(new Error("Sorry You Don't have access to this origin !!"));
  //   }
  // },
};

module.exports = corsOptions;
