// Dependencies
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// Sets up the express app
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the express app to handle data parsing // leaving if needed later
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// handling body parsing

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// Allows us to use static page
app.use(express.static('app/public'));

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);
// Starts the server to begin listening 
//==========very important=========================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});