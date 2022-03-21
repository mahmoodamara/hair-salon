const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));
var homeController = require('./controllers/homeController.js');
var teamController = require('./controllers/teamController.js');
var contactController = require('./controllers/contactController.js');
var portfolioController = require('./controllers/portfolioController.js');

var menuController = require('./controllers/menuController.js');
var bookingController = require('./controllers/bookingController.js');
var userController = require('./controllers/userController.js');
var messageController = require('./controllers/messageController.js');



app.listen(3000, () => console.log('Server started at port : 3000'));


app.use('/api', homeController);
app.use('/api', teamController);
app.use('/api', contactController);
app.use('/api', portfolioController);
app.use('/api', menuController);
app.use('/api', bookingController);
app.use('/api', userController);
app.use('/api', messageController);






