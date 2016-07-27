// Variables
var express = require('express');

var app = express();

var port = process.env.PORT || 5000;
var bookRouter = require('./src/routes/bookRoutes');

// Serving static files
app.use(express.static('public'));

// Setting up template engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

// Routes
app.use('/Books', bookRouter);

app.get('/', function(req, res) {
    res.render('index', {
        title: "Hello from render", 
        nav: [
            {
                Link: '/Books',
                Text: 'Books'
            },
            {
                Link: '/Authors',
                Text: 'Authors'
            }
        ]
    });
});


// Starting server
app.listen(port, function(err){
    console.log('Running server on port', port);
});