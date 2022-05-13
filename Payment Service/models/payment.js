const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    paymentAmount: {
        type: String,
        required: true,
    },
    paymentDate: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);