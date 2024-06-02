import { validateUsername } from "../validation/validateUser";

const users = require("../model/userSchema");
const Response = require("../response/successResponse");

const getUserProfile = async (req, res) => {
	const { user, email } = req;
	try {
		const userData = await users.findOne({username: user, email}, {_id: 0, refreshToken: 0,password:0})
		return res.status(200).json(new Response(200, userData))
	} catch (error) {
		return res.sendStatus(500)
	}
};

const updateUsername = async (req, res) => {
	const { username } = req.body;
	const {user} = req
	const isValidate = await validateUsername.validateAsync(req.body)
	if (isValidate?.error) {
		return res.status(400).json(new Response(400, null, isValidate?.error?.details))
	}
	try {
		await users.updateOne({username: user}, {$set: {username}})
		res.status(200).json(new Response(200, data));
	} catch (err) {
		return res.sendStatus(500)
	}
};

module.exports = {
	getUserProfile,
	updateUsername,
};
