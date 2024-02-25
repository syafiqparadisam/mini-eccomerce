const errResponse = require("../../response/errorResponse.js");
const Response = require("../../response/successResponse.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const users = require("../../model/userSchema.js");
require("dotenv").config();

const handleLogin = async (req, res) => {
	const { username, password } = req.body;
	const cookies = req.cookies;
	try {
		if (!username?.length || !password?.length) {
			return res.status(400).json(new Response(400));
		}
		const findData = await users.findOne({
			username: username,
		});
		if (findData === null) {
			return res
				.status(400)
				.json(new Response(400, "Wrong Username Or Password"));
		}
		const isPasswordValid = await bcrypt.compare(password, findData.password);
		if (isPasswordValid === false) {
			return res
				.status(400)
				.json(new Response(400, "Wrong Username Or Password"));
		} else if (findData) {
			const accessToken = jwt.sign(
				{ username: findData.username, email: findData.email },
				process.env.ACCESS_TOKEN,
				{ expiresIn: "20s" }
			);
			const refreshToken = jwt.sign(
				{ username: findData.username },
				process.env.REFRESH_TOKEN,
				{ expiresIn: "30d" }
			);

			let newRefreshTokenArray = cookies.refToken
				? findData.refreshToken.filter((rt) => rt !== cookies.refToken)
				: findData.refreshToken;
			if (cookies.refToken) {
				const findCookie = await users.findOne({
					refreshToken: cookies.refToken,
				});
				if (!findCookie) {
					console.log("Reuse Detected");
					newRefreshTokenArray = [];
				}
				res.clearCookie("refToken", {
					httpOnly: true,
					sameSite: "none",
					secure: true,
				});
			}
			const newRefreshToken = [...newRefreshTokenArray, refreshToken];
			await users.updateOne(
				{ username: findData.username },
				{ $set: { refreshToken: newRefreshToken } }
			);
			// kirim refreshToken cookie expirein 30 days
			res.cookie("refToken", refreshToken, {
				httpOnly: true,
				secure: true,
				sameSite: "none",
				maxAge: 30 * 24 * 60 * 60 * 1000, // 1 MONTHS
			});
			res.status(201).json(new Response(201, { accessToken, user: username }));
		}
	} catch (err) {
		res.status(400).json(new errResponse(400, err));
	}
};

module.exports = handleLogin;
