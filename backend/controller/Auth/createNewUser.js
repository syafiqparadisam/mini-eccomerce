const Response = require("../../response/successResponse.js");
const bcrypt = require("bcrypt");
const users = require("../../model/userSchema.js");
const {validateUser} = require("../../validation/validateUser");

const createNewUser = async (req, res) => {
	const { username, email, password,confirmPassword } = req.body;
	console.log(req.body)
	const isValidate = validateUser.validate({username, email, password,confirmPassword})
	if (isValidate?.error) {
		return res.status(400).json(new Response(400,null, isValidate?.error?.details))
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
				.json(new Response(409, null,`username or email already exists`));
		}
	
		const hashPassword = await bcrypt.hash(password, 10);
		const data = await users.insertMany({
			username,
			email,
			password: hashPassword,
		});
		return res.status(201).json(
				new Response(201, null,`Succesfully created new user ${data[0].username}`)
			);
	} catch (err) {
		return res.sendStatus(500)
	}
};

module.exports = createNewUser;
