var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [
    {
        title: 'Cracking the Tech Career',
        genre: 'Non Fiction',
        author: 'Gayle Laakmann McDowell',
        bookId: 23233485,
        read: true
    },
    {
        title: 'Left to Tell',
        genre: 'Non Fiction',
        author: 'Immaculée Ilibagiza',
        bookId: 408615,
        read: true
    },
    {
        title: 'Night',
        genre: 'Non Fiction',
        author: 'Elie Wiesel',
        bookId: 1617,
        read: true
    },
    {
        title: 'The House on Mango Street',
        genre: 'Fiction',
        author: 'Sandra Cisneros',
        bookId: 139253,
        read: true
    },
    {
        title: 'Artemis Fowl',
        genre: 'Fiction',
        author: 'Eoin Colfer',
        bookId: 249747,
        read: true
    }];

var router = function (nav) {
    
    adminRouter.route('/addBooks')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function(err, db) {
                var collection = db.collection('books');
                collection.insertMany(books, 
                    function(err, results) {
                        res.send(results);
                        db.close();
                });
            });
    });
    
    return adminRouter;
};

module.exports = router;