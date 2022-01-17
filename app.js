var express = require('express');

var app = express();

app.use(express.static(__dirname));

app.get('*', function(req, res){
  res.redirect('/');
});

var port = 3000;

app.listen(port);

console.log('Express server started on port %s', port);

