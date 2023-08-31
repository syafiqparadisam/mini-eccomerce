const jwt = require("jsonwebtoken");

const verifyJwt = async (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) return res.sendStatus(401);
  const token = authorization.split(" ");
  console.log({ authorization, token });
  try {
    const decoded = jwt.verify(token[1], process.env.ACCESS_TOKEN);
    if (!decoded?.username) {
      res.sendStatus(403);
    } else {
      console.log("Access Success");
      req.user = decoded.username;
      req.email = decoded.email;
      next();
    }
  } catch (error) {
    console.error(error.message);
  }

  //   if (!decoded) return res.status(403).json(decoded);
  //   req.user = decoded.username;
  //   next();
};

module.exports = verifyJwt;
