'use strict';
const express = require("express")
const Order = require('../models/order');
const router = express.Router();

// Create new order
router.post('/', async(req, res) => {

    const order = new Order({
        id: req.body.id,
        orderName: req.body.orderName,
        orderType: req.body.orderType,
        orderDetails: req.body.orderDetails,
        orderDate: req.body.orderDate,
    });

    try {
        const savedOrder = await order.save();
        res.json(savedOrder);
    } catch (err) {
        res.status(500).json({ message: err, isError: true });
        console.error(err);
        console.log(err);
    }

});

//Get all Orders
router.get('/', async(req, res) => {

    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err, isError: true });
        console.error(err);
    }
});

//Delete a order account
router.delete('/orderdelete/:id', async(req, res) => {
    Order.deleteOne({ _id: req.params.id })
        .then(thing => res.status(200).send(thing))
        .catch(error => res.status(400).send({ message: err, isError: true }));

});

//Get a order by name
router.get('/getOrderByName/:orderName', async(req,res) => {
    try{
        const order = await Order.findOne({orderName:req.params.orderName});
        res.json(order);
    }catch (err) {
        res.status(500).json({ message: err, isError: true });
        console.error(err);
    }
});

module.exports = router;