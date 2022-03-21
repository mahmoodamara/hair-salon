const mongoose = require('mongoose');
var Home = mongoose.model('Home', {
    h1: { type: String },
    p: { type: String },
    photo: { type: String },
    
});

module.exports = { Home };