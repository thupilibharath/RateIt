
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var search = require('./routes/search');
var ratings = require('./routes/ratings');
var items = require('./routes/Items');
var history = require('./routes/history');
var signup = require('./routes/signup');
var app = express();



// port setup
app.set('port', process.env.PORT || 7002);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


//Updated
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//
// ERROR HANDLERS

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


//DB Connection
mysql = require('mysql2');

connection = mysql.createConnection({
  host: 'mydb2.cev9f9km5ing.us-east-1.rds.amazonaws.com',
  user: 'root',
  password: 'rootroot',
  database: 'rest'
});

app.get('/', function(req, res){
  connection.query('SELECT 1');
    res.json('I am Alive');
  });
app.get('/search', search.search);
app.get('/giveRating',ratings.postReview);
app.get('/getRating', ratings.getReview)
app.get('/getRating1', ratings.getReview1);
app.get('/getItems', items.getItems);
app.get('/history', history.getHistory);
app.get('/history1', history.getReview);
app.get('/signup', signup.signup);
//app.get('/searchCategories',search.searchbycategories);


module.exports = app;

//Start Server
var serve = http.createServer(app);
serve.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
