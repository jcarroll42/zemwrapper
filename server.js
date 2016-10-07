var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var port = process.env.PORT || 3000;
var app = express();
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var configDB = require('./app/config/database.js');

mongoose.connect(configDB.url); // connect to our database

require('./app/config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)

app.use(session({ secret: 'shmuppewpew' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(express.static('public'));

require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// app.get('/', function (req, res){
// 	res.sendFile(path.join(__dirname, 'index.html'));
// });

 
app.listen(port);