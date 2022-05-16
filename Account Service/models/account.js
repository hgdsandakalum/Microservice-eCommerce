const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true,
    },
    accountType: {
        type: String,
        required: true,
    },
    cardDetails: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.model('Account', accountSchema);