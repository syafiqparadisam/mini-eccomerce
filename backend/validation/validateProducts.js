const Joi = require("joi")

const validationProducts = Joi.object({
    name: Joi.string().min(3).required(),
    price: Joi.number().min(3).required(),
    description: Joi.string().min(0).required(),
    image: Joi.array().items(Joi.object({
        public_image_url: Joi.string().min(5).required(),
        public_image_id: Joi.string().min(5).required()
    })).required()
})

const validateQuantity = Joi.object({
    quantity: Joi.number().positive().min(1).required()
})

module.exports = {
    validationProducts,
    validateQuantity
}