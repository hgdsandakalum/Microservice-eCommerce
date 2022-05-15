'use strict';
const express = require("express")
const Delivery = require('../models/delivery');
const router = express.Router();

// Create new delivery account
router.post('/', async(req, res) => {

    const delivery = new Delivery({
        customerId: req.body.customerId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address
    });

    try {
        const savedDelivery = await delivery.save();
        res.json(savedDelivery);
    } catch (err) {
        res.status(500).json({ message: err, isError: true });
        console.error(err);
    }

});

//Get all delivery
router.get('/', async(req, res) => {

    try {
        const delivery = await Delivery.find();
        res.json(delivery);
    } catch (err) {
        res.status(500).json({ message: err, isError: true });
        console.error(err);
    }
});

//Delete a delivery account
router.delete('/deliverydelete/:id', async(req, res) => {
    Delivery.deleteOne({ _id: req.params.id })
        .then(thing => res.status(200).send(thing))
        .catch(error => res.status(400).send({ message: err, isError: true }));

});

//Get a delivery by name
router.get('/getDeliveryByName/:fullName', async(req,res) => {
    try{
        const delivery = await Delivery.findOne({firstName:req.params.firstName});
        res.json(delivery);
    }catch (err) {
        res.status(500).json({ message: err, isError: true });
        console.error(err);
    }
});

module.exports = router;