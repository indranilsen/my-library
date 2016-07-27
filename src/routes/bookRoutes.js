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
        res.render('bookListView', {
            title: "Books",
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

bookRouter.route('/:id')
    .get(function (req, res) {
        var id = req.params.id;
        res.render('bookView', {
            title: "Book",
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
            book: books[id]
        });
    });

module.exports = bookRouter;