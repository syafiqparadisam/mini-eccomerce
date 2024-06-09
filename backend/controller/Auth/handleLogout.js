const Response = require("../../response/successResponse.js");
const users = require("../../model/userSchema.js");

const handleLogout = async (req, res) => {

	const cookies = req.cookies;
	console.log(cookies);
	if (!cookies?.refToken) {
		return res.sendStatus(204)
	}

	try {
		
	const refreshToken = cookies.refToken;
	const findData = await users.findOne({ refreshToken }).exec();

	// check is user have refresh token before logout
	if (!findData?.refreshToken) {
		res.clearCookie("refToken", {
			httpOnly: true,
			secure: true,
			sameSite: "none",
		});
		res.sendStatus(204);
	}

	// delete refresh token user
	findData.refreshToken = findData.refreshToken.filter(
		(rt) => rt !== refreshToken
	);

	await findData.save();
	res.clearCookie("refToken", {
		httpOnly: true,
		secure: true,
		maxAge: 0,
		sameSite: "none",
	});

	return res.sendStatus(204)
	} catch (error) {
		return res.sendStatus(500)
	}
}

module.exports = handleLogout;
