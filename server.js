// Dependencies
var express = require('express');
var path = require('path');

// Sets up the express app
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Starts the server to begin listening 
//==========very important=========================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});