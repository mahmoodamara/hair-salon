const mongoose = require('mongoose');
var Menu = mongoose.model('Menu', {
    hairCutName: { type: String },
    hairCutPrice: { type: String },
    photo: { type: String },
    
});

module.exports = { Menu };