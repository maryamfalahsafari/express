var express = require('express');
var bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.json());

app.get('/maryam',function(req,res){

	res.send({'result':'HI Maryam'});
});

app.listen(3000);

console.log('app is lstening to port 3000');