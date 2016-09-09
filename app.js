var express = require('express');
var app = express();
var morgan = require('morgan');


var port = process.env.PORT || 8000;

// app.get('/', function(req, res) {
//   res.send('hello world');
// });

app.use(express.static('public'));

app.listen(port, function() {
  console.log("Express is listening on port " + port);
});

module.exports = app;