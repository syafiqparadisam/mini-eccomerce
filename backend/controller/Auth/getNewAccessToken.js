const Response = require("../../response/successResponse.js");
const jwt = require("jsonwebtoken");
const users = require("../../model/userSchema.js");
require("dotenv").config();

const getNewAccessToken = async (req, res) => {
	const cookies = req.cookies;
	console.log(cookies);
	if (!cookies?.refToken) {
		return res.sendStatus(401);
	}

	const refreshToken = cookies.refToken;

	try {
		const foundUser = await users.findOne({ refreshToken }).exec();

		// PERNAH PUNYA REFRESH TOKEN DAN MENGGUNAKANNYA KEMBALI
		if (!foundUser) {
			const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN);
			console.log(decoded);
			if (decoded.username && decoded.email) {
				const HACKED_USER = await users
					.findOne({ username: decoded.username })
					.exec();
				HACKED_USER.refreshToken = [];
				const result = await HACKED_USER.save();
				console.log(result);
				return res.clearCookie("refToken", {
					httpOnly: true,
					sameSite: "none",
					secure: true,
				});
			} else if (!decoded.username && !decoded.email) {
				return res.sendStatus(403);
			}
		}

		const newRefreshTokenArray = foundUser.refreshToken.filter(
			(rt) => rt !== refreshToken
		);

		const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN);
		if (!decoded) {
			foundUser.refreshToken = [...newRefreshTokenArray];
			const result = await foundUser.save();
		} else if (decoded.username === foundUser.username) {
			// BERI ACCESS TOKEN
			const accessToken = jwt.sign(
				{ username: foundUser.username, email: foundUser.email },
				process.env.ACCESS_TOKEN,
				{ expiresIn: process.env.APPLICATION === "dev" ? "1h" : "1m" }
			);
			return res.json(new Response(200, { accessToken, user: decoded.username }));
		}
	} catch (error) {
		return res.sendStatus(500)
	}
};

module.exports = getNewAccessToken;
