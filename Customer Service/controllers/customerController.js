'use strict';
const express = require("express")
const Customer = require('../models/customer');
const router = express.Router();
const bcrypt = require('bcrypt');

// Create new customer account
router.post('/', async(req, res) => {

    //Checking if the user is already in the database
    const emailExist = await Customer.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send('Email already exists');

    //Hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const customer = new Customer({
        fullName: req.body.fullName,
        email: req.body.email,
        password: hashedPassword,
        mobile: req.body.mobile,
        address: req.body.address,
        gender: req.body.gender
    });

    try {
        const savedCust = await customer.save();
        res.json(savedCust);
    } catch (err) {
        res.status(500).json({ message: err, isError: true });
        console.error(err);
    }

});

//Get all customers
router.get('/', async(req, res) => {

    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (err) {
        res.status(500).json({ message: err, isError: true });
        console.error(err);
    }
});

//Delete a customer account
router.delete('/custdelete/:id', async(req, res) => {
    Customer.deleteOne({ _id: req.params.id })
        .then(thing => res.status(200).send(thing))
        .catch(error => res.status(400).send({ message: err, isError: true }));

});

//Get a customer by name
router.get('/getCustByName/:fullName', async(req,res) => {
    try{
        const customer = await Customer.findOne({firstName:req.params.firstName});
        res.json(customer);
    }catch (err) {
        res.status(500).json({ message: err, isError: true });
        console.error(err);
    }
});

module.exports = router;