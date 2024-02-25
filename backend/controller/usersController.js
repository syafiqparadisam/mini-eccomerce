const errResponse = require("../response/errorResponse.js");
const Response = require("../response/successResponse.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const users = require("../model/userSchema.js");
const validateUser = require("../validation/validateUser.js");
require("dotenv").config();

const createNewUser = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  if (confirmPassword !== password) {
    return res.status(400).json(new Response(400, "Password is not same"));
  }

  try {
    const isUsernameEmailDuplicate = await users.findOne(
      { username: username, email: email },
      { username: 1, email: 1, _id: 0 }
    );

    if (isUsernameEmailDuplicate) {
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
    res.status(201).json(new Response(201, data));
  } catch (err) {
    res.status(400).json(new errResponse(400, err));
  }
};

const handleLogin = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json(new Response(400));
  }

  try {
    const findData = await users.findOne({ username: username });
    if (!findData?.username) {
      res.status(401).json(new Response(401, "Wrong Username"));
    } else {
      const isPasswordValid = await bcrypt.compare(password, findData.password);

      if (!isPasswordValid) {
        res.status(401).json(new Response(401, "Password Is Not Valid"));
      } else {
        const accessToken = jwt.sign(
          { username: findData.username, email: findData.email },
          process.env.ACCESS_TOKEN,
          { expiresIn: "10d" }
        );
        const refreshToken = jwt.sign(
          { username: findData.username },
          process.env.REFRESH_TOKEN,
          { expiresIn: "30d" }
        );
        await users.updateOne(
          { username: findData.username },
          { $set: { refreshToken: refreshToken } }
        );

        // kirim refreshToken cookie expirein 30 days
        res.cookie("refToken", refreshToken, {
          httpOnly: true,
          secure: true,
          sameSite: "None",
          maxAge: 30 * 24 * 60 * 60 * 1000,
        });
        res.json({ accessToken });
      }
    }
  } catch (err) {
    res.status(500).json(new errResponse(500, err));
  }
};

const getNewAccessToken = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.refToken) {
    return res.sendStatus(401);
  }
  const refreshToken = cookies.refToken;

  try {
    const foundUser = await users.findOne({ refreshToken });
    if (!foundUser) {
      return res.sendStatus(403);
    } //Forbidden
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN);
    if (!decoded?.username) {
      return res.sendStatus(403);
    } else if (decoded.username === foundUser.username) {
      const accessToken = jwt.sign(
        { username: foundUser.username },
        process.env.ACCESS_TOKEN
      );
      res.json({ accessToken });
    }
  } catch (error) {
    res.status(400).json(new errResponse(400, error));
  }
};

module.exports = {
  createNewUser,
  handleLogin,
  getNewAccessToken,
};
