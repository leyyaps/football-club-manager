var express = require('express');
var app = express();
var morgan = require('morgan');
var bluebird = require('bluebird');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');


var environment = app.get('env');
var port = process.env.PORT || 8000;

// app.get('/', function(req, res) {
//   res.send('hello world');
// });
var routes = require('./config/routes');


app.use(express.static('public'));

var databaseUri = require('./config/db')(environment);
mongoose.Promise = bluebird;
mongoose.connect(databaseUri);

if('test' !== environment) {
  app.use(require('morgan')('dev'));
}

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);



app.listen(port, function() {
  console.log("Express is listening on port " + port);
});

module.exports = app;