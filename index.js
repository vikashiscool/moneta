var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    passport = require('passport'),
    flash = require('connect-flash'),
    // morgan = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    html = require('html'),
    db = require('./models'),
    path = require('path'),
    methodOverride = require('method-override'),
    configDB = require('./config/database.js');
    // SessionStore = require('session-mongoose')(express)

    require('./config/passport')(passport); // pass passport for configuration

// configuration ===============================================================
// mongoose.connect(configDB.url); // connect to our database

mongoose.createConnection('mongodb://localhost/moneta'); // connect to our database on your local system named moneta. You can name it whatever you like, and it will be created as soon as you save some data to it.

// serve static files from public folder
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));
path.join(__dirname, '/views');

app.set('etag', false); // turn off

// app.use(morgan('dev'));

app.use(cookieParser()); // read cookies (needed for auth)

app.use(bodyParser.urlencoded({ extended: true })); // configure bodyParser (for receiving form data)
// app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());



// required for passport
// app.use(
//   express.session({
//     store: new SessionStore({
//     url: 'mongodb://localhost/session',
//     interval: 1200000
//   }),
//   cookie: { maxAge: 1200000 },
//   secret: 'my secret'
// }))
app.use(session({ secret: 'moneymoneymoney', resave: false, saveUninitialized: false })); // session secret
app.use(passport.initialize()); // --> dependent on config/passport.js
app.use(passport.session()); // persistent login sessions --> dependent on config/passport.js
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./routes.js')(app, passport); // load our routes and pass in our app and fully configured passport --> may need to create this file (04-18-16)



// set view engine to hbs (handlebars)
// app.set('view engine', 'hbs');


// listen on port 8080 (local) or process.env.PORT (heroku)
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
