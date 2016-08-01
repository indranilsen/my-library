var http = require('http');
var xml2js = require('xml2js');
var parser = xml2js.Parser({explicitArray: false});
var dotenv = require('dotenv').config({silent: true});

var goodreadsService = function() {
    
    var getBookById = function(id, cb) {
        var options = {
            host: 'www.goodreads.com',
            path: '/book/show/' + id + '?format=xml&key=' + process.env.TOKEN
        };
        
        var callback = function(response) {
            var str = '';
            response.on('data', function(chunk) {
                str += chunk;
            });
            response.on('end', function() {
                parser.parseString(str, function(err, result) {
                    cb(null, result.GoodreadsResponse.book);
                });
            });
        };
        
        http.request(options, callback).end();
    };
    
    return {
        getBookById: getBookById
    };
};

module.exports = goodreadsService;