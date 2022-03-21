const mongoose = require('mongoose');

 

  var User = mongoose.model('User', {
    username:{type:String},
    email: {type:String},
    password:{type: String},
    phone: {type:String},
    date: {type:String}


});

  module.exports = {User}