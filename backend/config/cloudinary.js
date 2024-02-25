const {v2: cloudinary} = require('cloudinary')
require('dotenv').config()

cloudinary.config({
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    cloud_name: process.env.CLOUD_NAME
})

module.exports = cloudinary