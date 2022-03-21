const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Portfolio } = require('../models/portfolio');

router.get('/portfolios', (req, res) => {
    Portfolio.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Portfolio :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/portfolios', (req, res) => {
    var port = new Portfolio({
        title: req.body.title,
        nameProduct: req.body.nameProduct,
        priceProduct: req.body.priceProduct,
        photo: req.body.photo,

    });
    port.save((err, doc) => {
    if (!err) { res.send(doc); }
        else { console.log('Error in home Portfolio :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.put('/home/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var home = {
        h1: req.body.h1,
        p: req.body.p,
        photo: req.body.photo,
    };
    Home.findByIdAndUpdate(req.params.id, { $set: home }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/home/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Home.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;