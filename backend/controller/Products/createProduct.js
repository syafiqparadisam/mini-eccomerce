const productSchema = require("../../model/productSchema")

const { validationProducts } = require("../../validation/validateProducts");
const Response = require("../../response/successResponse")

module.exports = async (req,res) => {
    const {name, price,description,image} = req.body

    try {
    const isValidate = await validationProducts.validateAsync({name, price,description,image})
    if (isValidate?.errors) {
        return res.status(400).json(new Response(400, null, isValidate?.errors?.details))
    }

    const result = await productSchema.insertMany({name, price,description,image})
    console.log(result)

    return res.status(200).json(new Response(200, result, "Successfully create product"))
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)    
    }
}