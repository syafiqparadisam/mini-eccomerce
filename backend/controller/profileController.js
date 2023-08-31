const users = require("../model/userSchema");
const errResponse = require("../response/errorResponse");
const Response = require("../response/successResponse");

const getUserProfile = async (req, res) => {
  try {
    const findUser = await users.findOne({ username: req.user });
    if (!findUser) return res.sendStatus(404).json(new Response(404));
    res.json(findUser);
  } catch (error) {
    res.status(500).json(new errResponse(400, error));
  }
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
    res.status(400).json(new errResponse(400, error, "Bad Request"));
  }
};

module.exports = {
  getUserProfile,
  updateUsernameEmail,
};
