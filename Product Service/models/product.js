const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    productAmount: {
        type: String,
        required: true,
    },
    productCount: {
        type: String,
        required: true,
    },
    productDescription: {
        type: String,
        required: true,
    },
    productDate: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);