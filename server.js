/**
 * Created by jaser.akuly on 11/5/15.
 */
var express = require('express');
    stylus = require('stylus');

var env  = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path) {
    return stylus(str).set('filename', path);
}

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

app.get('*', function(req, res) {
    res.render('index');
});

var port = 3000;
app.listen(port);
console.log('Listening on port ' + port + '...');