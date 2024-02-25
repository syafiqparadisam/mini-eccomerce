const jwt = require("jsonwebtoken");

const verifyJwt = async (req, res, next) => {
	const authorization = req.headers.Authorization || req.headers.authorization
	console.log(authorization)
	if (!authorization) return res.sendStatus(401);
	const token = authorization.split(" ");
	console.log(token)
	try {
		const decoded = jwt.verify(token[1], process.env.ACCESS_TOKEN);
		if (!decoded?.username) {
			console.log(decoded)
			return res.sendStatus(403);
		} else if (decoded.username && decoded.email) {
			console.log("Access Success");
			req.email = decoded.email;
			req.user = decoded.username;
			next();
		} else {
			throw new Error("APAKAH DISINI");
		}
	} catch (error) {
		console.error(error.message);
		res.sendStatus(403);
	}

};

module.exports = verifyJwt;
