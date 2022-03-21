const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Menu } = require('../models/menu');

router.get('/menus', (req, res) => {
    Menu.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Menu :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/menus', (req, res) => {
    var menu = new Menu({
        hairCutName: req.body.hairCutName,
        hairCutPrice: req.body.hairCutPrice,
        photo: req.body.photo,

    });
    menu.save((err, doc) => {
    if (!err) { res.send(doc); }
        else { console.log('Error in Menu :' + JSON.stringify(err, undefined, 2)); }
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

router.delete('/menus/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Menu.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;