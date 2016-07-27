// Variables
var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var bookRouter = express.Router();

// Serving static files
app.use(express.static('public'));


// Setting up template engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

var books = [
        {
            title: 'Test Book',
            genre: 'Fiction',
            author: 'Test Author',
            read: false
        },
         {
            title: 'Test Book',
            genre: 'Fiction',
            author: 'Test Author',
            read: false
        },
         {
            title: 'Test Book',
            genre: 'Fiction',
            author: 'Test Author',
            read: false
        },
         {
            title: 'Test Book',
            genre: 'Fiction',
            author: 'Test Author',
            read: false
        },
         {
            title: 'Test Book',
            genre: 'Fiction',
            author: 'Test Author',
            read: false
        },
         {
            title: 'Test Book',
            genre: 'Fiction',
            author: 'Test Author',
            read: false
        },
    ];

// Routes
bookRouter.route('/')
    .get(function(req, res) {
        res.render('books', {
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
            ],
            books: books
        });
    });

bookRouter.route('/single')
    .get(function(req, res) {
        res.send('d book');
    });

app.use('/Books', bookRouter)

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