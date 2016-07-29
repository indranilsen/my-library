// Variables
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');

var app = express();

var port = process.env.PORT || 5000;

var nav = [{
    Link: '/books',
    Text: 'Book'
    }, {
    Link: '/authors',
    Text: 'Author'
    }];


// Middleware
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({secret: 'library'}));

require('./src/config/passport')(app);

// Setting up template engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

// Routes
var bookRouter = require('./src/routes/bookRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);
var authRouter = require('./src/routes/authRoutes')(nav);
app.use('/books', bookRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRouter);

app.get('/', function(req, res) {
    res.render('index', {
        title: 'Hello from render', 
        nav: nav
    });
});


// Starting server
app.listen(port, function(err){
    console.log('Running server on port', port);
});