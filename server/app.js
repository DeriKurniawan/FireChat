var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport')
var LocalStrategy = require('passport-local')
var bcrypt = require('bcrypt')
var User = require('./models/user.js')
var cors = require('cors')

var db_config = {
	development: 'mongodb://localhost:27017/firechat1db',
	test: 'mongodb://localhost:27017/firechat1db_test'
}

var index = require('./routes/index');
var users = require('./routes/users');
var comments = require('./routes/comments');

passport.use(new LocalStrategy(
	function(username, password, done){
	  User.findOne({username : username}, (err, user)=>{
	    if(!user){
	      return done(null, { message:'Username or Password is Wrong' })
	    }
	    if(!bcrypt.compareSync(password, user.password)){
	      return done(null, { message: 'Username or Password is Wrong' })
	    }
    return done(null, user)
  })
	}));

var app = express();
var app_env = app.settings.env;
console.log('mongoose -----');

mongoose.connect(db_config[app_env], (err, res)=>{
	console.log('connect to database '+ db_config[app_env]);
});

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/api/user', users);
app.use('/api/comment', comments);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
