const Joi = require("joi")

const validationProducts = Joi.object({
    nama: Joi.string().min(3).required(),
    harga: Joi.number().min(3).required(),
    deskripsi: Joi.string().min(0).required(),
})

const validateQuantity = Joi.object({
    quantity: Joi.number().positive().min(1).required()
})

module.exports = {
    validationProducts,
    validateQuantity
}