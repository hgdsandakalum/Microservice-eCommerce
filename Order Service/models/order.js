const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    orderName: {
        type: String,
        required: true,
    },
    orderType: {
        type: String,
        required: true,
    },
    orderDetails: {
        type: String,
        required: true,
    },
    orderDate: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);