const mongoose = require('mongoose');
var Booking = mongoose.model('Booking', {
    username: { type: String},
    time: { type: String},
    cutType: { type: String },
    email: { type: String },
    
});

module.exports = { Booking };