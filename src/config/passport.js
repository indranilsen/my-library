var passport = require('passport');

var pass = function (app) {
    app.use(passport.initialize());
    app.use(passport.session());
    
};

module.exports = pass;