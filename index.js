var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    mongoose = require('mongoose'),
    passport = require('passport'),
    flash = require('connect-flash'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    configDB = require('./config/database.js');

// require('./config/passport')(passport); // pass passport for configuration

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

// mongoose.connect('mongodb://localhost/moneta'); // connect to our database


app.use(cookieParser()); // read cookies (needed for auth)

app.use(bodyParser.urlencoded({ extended: true })); // configure bodyParser (for receiving form data)

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// required for passport
app.use(session({ secret: 'moneymoneymoney' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session



// set view engine to hbs (handlebars)
// app.set('view engine', 'hbs');

// connect to mongodb
// mongoose.connect('mongodb://localhost/moneta');




app.get('/', function (req, res) {
  res.render('index');
});









// listen on port 3000
app.listen(3000, function() {
  console.log('server started');
});