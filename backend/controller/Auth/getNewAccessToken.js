const Response = require("../../response/successResponse.js");
const jwt = require("jsonwebtoken");
const users = require("../../model/userSchema.js");
require("dotenv").config();

const getNewAccessToken = async (req, res) => {
	const cookies = req.cookies;

	if (!cookies?.refToken) {
		return res.sendStatus(401);
	}

	const refreshToken = cookies.refToken;
	try {
		const foundUser = await users.findOne({ refreshToken }).exec();

		// check is user exist, if no it will validate refresh token found actual user and delete all refresh token
		if (!foundUser) {
			const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN);
			console.log(decoded);
			if (decoded.username && decoded.email) {
				const HACKED_USER = await users
					.findOne({ username: decoded.username })
					.exec();
				HACKED_USER.refreshToken = [];
				const result = await HACKED_USER.save();
				return res.clearCookie("refToken", {
					httpOnly: true,
					sameSite: "none",
					secure: true,
				});
			} else if (!decoded.username && !decoded.email) {
				return res.sendStatus(403);
			}
		}

		// get all refresh token user except refresh token in cookie
		const newRefreshTokenArray = foundUser.refreshToken.filter(
			(rt) => rt !== refreshToken
		);

		// verify cookie refresh token
		const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN);
		if (!decoded) {
			// if refresh token expired, delete refresh token in database user
			foundUser.refreshToken = [...newRefreshTokenArray];
			await foundUser.save();
			
		} else if (decoded.username === foundUser.username) {
			// if refresh token valid, it will be give new access token
			const accessToken = jwt.sign(
				{ username: foundUser.username, email: foundUser.email },
				process.env.ACCESS_TOKEN,
				{ expiresIn: process.env.APPLICATION === "dev" ? "1h" : "1m" }
			);
			return res.json(new Response(200, { accessToken, user: decoded.username }, "Ok"));
		}
	} catch (error) {
		return res.sendStatus(500)
	}
};

module.exports = getNewAccessToken;
