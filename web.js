var express = require ('express');
var fs = require ('fs');
var app = express.createServer(express.logger());
var buf = new Buffer (225);

app.get('/', function (request, response){

fs.readFileSync('~/bitstarter/index.html', function (err, data){
if (err) throw err;
console.log(data);
});

buffer.toString('utf-8');

//len = buf.write('\u00bd + \u00bc = \u00be', 0);
//console.log(len + " bytes: " + buf.toString('utf8', 0, len));
//request.pipe(response);


//response.send ("HellO World 2!");
});

var port = process.env. PORT || 5000;
app.listen(port, function() {
console.log ("Listening on " +port);
});
