var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    mongoose = require('mongoose'),
    passport = require('passport'),
    flash = require('connect-flash'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    html = require('html'),
    db = require('./models'),
    path = require('path'),
    configDB = require('./config/database.js');

    require('./config/passport')(passport); // pass passport for configuration

// configuration ===============================================================
// mongoose.connect(configDB.url); // connect to our database

mongoose.createConnection('mongodb://localhost/moneta'); // connect to our database on your local system named moneta. You can name it whatever you like, and it will be created as soon as you save some data to it.

app.use(cookieParser()); // read cookies (needed for auth)

app.use(bodyParser.urlencoded({ extended: true })); // configure bodyParser (for receiving form data)

// serve static files from public folder
app.use(express.static(__dirname + '/views'));
// app.use(express.static(path.join(__dirname, 'public')));
path.join(__dirname, '/views');

// required for passport
app.use(session({ secret: 'moneymoneymoney', resave: false, saveUninitialized: false })); // session secret
// app.use(passport.initialize()); // --> dependent on config/passport.js
// app.use(passport.session()); // persistent login sessions --> dependent on config/passport.js
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./routes.js')(app, passport); // load our routes and pass in our app and fully configured passport --> may need to create this file (04-18-16)



// set view engine to hbs (handlebars)
// app.set('view engine', 'hbs');


// listen on port 3000
app.listen(port, function() {
  console.log('Server started on port ' + port);
});