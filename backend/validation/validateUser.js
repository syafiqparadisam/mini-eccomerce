const Joi = require("joi");

const validateUser = Joi.object({
  username: Joi.string().min(2).required(),
  email: Joi.string().email().min(2).required(),
  password: Joi.string().min(8).required(),
  confirmPassword: Joi.string().min(8).required(),
});

module.exports = validateUser;
