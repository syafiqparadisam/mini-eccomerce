const productSchema = require("../../model/productSchema")

const { validationProducts } = require("../../validation/validateProducts");
const Response = require("../../response/successResponse")

module.exports = async (req,res) => {
    const {nama,harga,deskripsi} = req.body

    try {
    const isValidate = await validationProducts.validateAsync(req.body)
    if (isValidate?.errors) {
        return res.status(400).json(new Response(400, null, isValidate?.errors?.details))
    }

    const result = await productSchema.insertMany({nama,deskripsi,harga})
    console.log(result)

    return res.status(200).json(new Response(200, result, "Successfully create product"))
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)    
    }
}