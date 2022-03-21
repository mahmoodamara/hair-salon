const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Booking } = require('../models/booking');

router.get('/bookings', (req, res) => {
    Booking.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Booking :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/bookings', (req, res) => {
    var booking = new Booking({
        username: req.body.username,
        time: req.body.time,
        cutType: req.body.cutType,
        email: req.body.email,

    });
    booking.save((err, doc) => {
    if (!err) { res.send(doc); }
        else { console.log('Error in booking :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.put('/menus/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var menu = {
        hairCutName: req.body.hairCutName,
        hairCutPrice: req.body.hairCutPrice,
        photo: req.body.photo,
    };
    Menu.findByIdAndUpdate(req.params.id, { $set: menu }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/bookings/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Booking.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;