var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

var strategy = function() {
    passport.use(new localStrategy({
        usernameField: 'userName',
        passwordField: 'password'
    }, function(username, password, done){
        var user = {
            username: username,
            password: password
        };
        done(null, user);
    }));
}