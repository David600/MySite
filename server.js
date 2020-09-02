

var express = require('express');


var app = express();
app.use(express.static('public'));

// http://localhost:8080/


app.get('/', function(req, res) {
  res.sendFile('E:/MySite(1)/MySite/public/index.html');
  });

app.listen(8080);
console.log('Сервер стартовал!');