const mongoose = require('mongoose')

const pesanan = mongoose.Schema({
    users: {
        type: String,
        required: true
    },
    noPesanan: {
        type: Number,
        required: true
    },
    idProduct: {
        type: Number,
        required: true
    },
    namaProduct: {
        type: String,
        required: true
    },
    harga: {
        type: Number,
        required: true
    },
    alamat: {
        type: String,
        required: true
    },
    waktuSampai: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('pesanan', pesanan)