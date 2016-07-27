var express = require('express');
var bookRouter = express.Router();

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
    }];

bookRouter.route('/')
    .get(function (req, res) {
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
    .get(function (req, res) {
        res.send('');
    });

module.exports = bookRouter;