const jwt = require("jsonwebtoken");

const verifyJwt = async (req, res, next) => {
	const authorization = req.headers.Authorization || req.headers.authorization

	// check header authorization
	if (!authorization) return res.sendStatus(401);
	const token = authorization.split(" ");
		const decoded = jwt.verify(token[1], process.env.ACCESS_TOKEN);
		if (!decoded?.username) {
			return res.sendStatus(403);
		} else if (decoded.username && decoded.email) {
			console.log("Access Success");
			req.email = decoded.email;
			req.user = decoded.username;
			next();
		} else {
			return res.sendStatus(500)
		}

};

module.exports = verifyJwt;
