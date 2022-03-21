const mongoose = require('mongoose');
var Portfolio = mongoose.model('Portfolio', {
    title: { type: String },
    nameProduct: { type: String },
    priceProduct: { type: String },
    photo: { type: String },
    
});

module.exports = { Portfolio };