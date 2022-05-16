'use strict';
const express = require("express")
const Payment = require('../models/payment');
const router = express.Router();

// Create new payment dataSet
router.post('/', async(req, res) => {

    const payment = new Payment({
        customerName: req.body.customerName,
        paymentMethod: req.body.email,
        paymentAmount: req.body.paymentAmount,
        paymentDate: req.body.paymentDate,
        description: req.body.description
    });

    try {
        const savedPayment = await payment.save();
        res.json(savedPayment);
    } catch (err) {
        res.status(500).json({ message: err, isError: true });
        console.error(err);
    }

});

//Get all payments
router.get('/', async(req, res) => {

    try {
        const payment = await Payment.find();
        res.json(payment);
    } catch (err) {
        res.status(500).json({ message: err, isError: true });
        console.error(err);
    }
});

//Delete a payment
router.delete('/paydelete/:id', async(req, res) => {
    Payment.deleteOne({ _id: req.params.id })
        .then(thing => res.status(200).send(thing))
        .catch(error => res.status(400).send({ message: err, isError: true }));

});

//Get a payment by Id
router.get('/getPaymentById/:id', async(req,res) => {
    try{
        const payment = await Payment.findOne({_id:req.params.id});
        res.json(payment);
    }catch (err) {
        res.status(500).json({ message: err, isError: true });
        console.error(err);
    }
});

module.exports = router;