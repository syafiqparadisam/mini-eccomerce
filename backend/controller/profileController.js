const users = require("../model/userSchema");
const Response = require("../response/successResponse");

const getUserProfile = (req, res) => {
	const { user, email } = req;
	if (!user || !email) {
		res.status(403).json(new Response(403, `User or email not found`));
	}
	res.send("Hello");
};

const updateUsernameEmail = async (req, res) => {
	const { username, email } = req.body;
	const userData = {
		username: req.user,
		email: req.email,
	};

	if (!username?.length || !email?.length) {
		res
			.status(400)
			.json(new Response(400, "All Fields Are Required", "Not Ok"));
	}

	try {
		const data = await users.updateOne(
			{ username: userData, email: userData.email },
			{ $set: { username: username, email: email } }
		);
		if (!data) return res.status(404).json(new Response(404));
		res.status(200).json(new Response(200, data));
	} catch (err) {
		return res.sendStatus(500)
	}
};

module.exports = {
	getUserProfile,
	updateUsernameEmail,
};
