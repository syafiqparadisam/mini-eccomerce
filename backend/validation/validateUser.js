const Joi = require("joi");

const validateUser = Joi.object({
  username: Joi.string().min(2).required(),
  email: Joi.string().email({ minDomainSegments: 2 }).min(2).required(),
  password: Joi.string().min(8).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  confirmPassword: Joi.ref("password"),
});

module.exports = validateUser;
