// Variables
var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

var nav = [{
    Link: '/books',
    Text: 'Book'
    }, {
    Link: '/authors',
    Text: 'Author'
    }];



// Serving static files
app.use(express.static('public'));

// Setting up template engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

// Routes

//var nav = [
//    {
//        Link: '/Books',
//        Text: 'Book'
//    },
//    {
//        Link: '/Authors',
//        Text: 'Author'
//    }
//];

var bookRouter = require('./src/routes/bookRoutes')(nav);
app.use('/Books', bookRouter);

app.get('/', function(req, res) {
    res.render('index', {
        title: "Hello from render", 
        nav: nav
    });
});


// Starting server
app.listen(port, function(err){
    console.log('Running server on port', port);
});