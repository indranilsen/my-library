var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [
    {
        title: 'Power',
        genre: 'Non Fiction',
        author: 'Jeff Pfeffer',
        read: true
    },
    {
        title: 'Cracking the Tech Career',
        genre: 'Non Fiction',
        author: 'Gayle Laakmann McDowell',
        read: true
    },
    {
        title: 'Left to Tell',
        genre: 'Non Fiction',
        author: 'Immaculée Ilibagiza',
        read: true
    },
    {
        title: 'Night',
        genre: 'Non Fiction',
        author: 'Elie Wiesel',
        read: true
    },
    {
        title: 'The House on Mango Street',
        genre: 'Fiction',
        author: 'Sandra Cisneros',
        read: true
    },
    {
        title: 'Artemis Fowl',
        genre: 'Fiction',
        author: 'Eoin Colfer',
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