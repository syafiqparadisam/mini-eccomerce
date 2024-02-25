const errResponse = require("../../response/errorResponse.js");
const Response = require("../../response/successResponse.js");
const bcrypt = require("bcrypt");
const users = require("../../model/userSchema.js");
const validateUser = require("../../validation/validateUser.js");

const createNewUser = async (req, res) => {
	const { username, email, password, confirmPassword } = req.body;

	if (confirmPassword !== password) {
		return res.status(400).json(new Response(400, "Password is not same"));
	}

	try {
		const isEmailDuplicate = await users.findOne(
			{ username: username },
			{ username: 1, email: 1, _id: 0 }
		);
		const isUsernameDuplicate = await users.findOne(
			{ email: email },
			{ username: 1, email: 1, _id: 0 }
		);

		if (isUsernameDuplicate || isEmailDuplicate) {
			return res
				.status(409)
				.json(new Response(409, `username or email already exists`));
		}
		const { error } = await validateUser.validateAsync(req.body);
		if (error) {
			throw error;
		}
		const hashPassword = await bcrypt.hash(password, 10);
		const data = await users.insertMany({
			username,
			email,
			password: hashPassword,
		});
		res
			.status(201)
			.json(
				new Response(201, `Succesfully created new user ${data[0].username}`)
			);
	} catch (err) {
		res.status(400).json(new errResponse(400, err));
	}
};

module.exports = createNewUser;
