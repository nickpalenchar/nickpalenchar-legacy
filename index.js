var express = require('express'),
    app = express(),
    path = require('path');


app.use('/api/js', express.static(__dirname + '/js'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.get('/api/style', function (req, res) {
   res.sendFile(path.join(__dirname, '/css/style.css'));
});

app.listen(1999, function () {
    console.log("server is partying like it's on port 1999");
});