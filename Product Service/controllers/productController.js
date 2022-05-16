'use strict';
const express = require("express");
const Product = require('../models/product');
const router = express.Router();

//Create new product
router.post('/', async(req, res) => {

    const payment = new Product({
        productName: req.body.productName,
        productAmount: req.body.productAmount,
        productCount: req.body.productCount,
        productDescription: req.body.productDescription,
        productDate: req.body.productDate,
    });

    try {
        const savedProduct = await product.save();
        res.json(savedProduct);
    } catch (err) {
        res.status(500).json({ message: err, isError: true });
        console.error(err);
    }

});

//Get all products
router.get('/', async(req, res) => {

    try {
        const product = await Product.find();
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err, isError: true });
        console.error(err);
    }
});

//Delete
router.delete('/productdelete/:id', async(req, res) => {
    Payment.deleteOne({ _id: req.params.id })
        .then(thing => res.status(200).send(thing))
        .catch(error => res.status(400).send({ message: err, isError: true }));

});

module.exports = router;