const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    customerId: {
        type: String,
        required: true,
    },
    customerName: {
        type: String,
        required: true,
    },
    feedbackId: {
        type: String,
        required: true,
    },
    feedback: {
        type: String,
        required: true,
    },
    feedbackDate: {
        type: String,
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.model('Feedback', feedbackSchema);