'use strict';
const express = require("express")
const Payment = require('../models/account');
const router = express.Router();

// Create 
router.post('/', async(req, res) => {

    const payment = new Account({
        customerName: req.body.customerName,
        accountType: req.body.email,
        cardDetails: req.body.paymentAmount,
        description: req.body.description
    });

    try {
        const savedPayment = await account.save();
        res.json(savedAccount);
    } catch (err) {
        res.status(500).json({ message: err, isError: true });
        console.error(err);
    }

});

//Get all account
router.get('/', async(req, res) => {

    try {
        const account = await Account.find();
        res.json(account);
    } catch (err) {
        res.status(500).json({ message: err, isError: true });
        console.error(err);
    }
});

//Delete a Account
router.delete('/accountdelete/:id', async(req, res) => {
    Account.deleteOne({ _id: req.params.id })
        .then(thing => res.status(200).send(thing))
        .catch(error => res.status(400).send({ message: err, isError: true }));

});

//Get an Account by Id
router.get('/getAccountById/:id', async(req,res) => {
    try{
        const account = await Account.findOne({_id:req.params.id});
        res.json(account);
    }catch (err) {
        res.status(500).json({ message: err, isError: true });
        console.error(err);
    }
});

module.exports = router;