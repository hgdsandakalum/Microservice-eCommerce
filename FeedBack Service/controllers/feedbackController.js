'use strict';
const express = require("express")
const Feedback = require('../models/feedback');
const router = express.Router();

// Create new Feedback dataSet
router.post('/', async(req, res) => {

    const feedback = new Feedback({
        customerId: req.body.customerId,
        customerName: req.body.customerName,
        feedbackId: req.body.feedbackId,
        feedback: req.body.feedback,
        feedbackDate: req.body.feedbackDate
    });

    try {
        const savedFeedback = await feedback.save();
        res.json(savedFeedback);
    } catch (err) {
        res.status(500).json({ message: err, isError: true });
        console.error(err);
    }

});

//Get all FeedBacks
router.get('/', async(req, res) => {

    try {
        const feedback = await Feedback.find();
        res.json(feedback);
    } catch (err) {
        res.status(500).json({ message: err, isError: true });
        console.error(err);
    }
});

//Delete a Feedback
router.delete('/feedbackDelete/:id', async(req, res) => {
    Feedback.deleteOne({ _id: req.params.id })
        .then(thing => res.status(200).send(thing))
        .catch(error => res.status(400).send({ message: err, isError: true }));

});

//Get a Feedback by Id
router.get('/getFeedbackById/:id', async(req,res) => {
    try{
        const feedback = await Feedback.findOne({_id:req.params.id});
        res.json(feedback);
    }catch (err) {
        res.status(500).json({ message: err, isError: true });
        console.error(err);
    }
});

module.exports = router;
