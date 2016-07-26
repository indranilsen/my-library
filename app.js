var express = require('express');

var app = express();

var port = 5000;

app.get('/', function(req, res) {
    res.send("Hello world!");
});

app.listen(5000, function(err){
    console.log('Running server on port', port);
});