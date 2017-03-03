var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var path = require('path');
var favicon = require('serve-favicon');

var app = module.exports = express();



// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Serve favicon
app.use(favicon(__dirname + '/wwwroot/favicon.png'));

// all environments
app.set('port', process.env.PORT || 3001);
app.set('views', __dirname + '/wwwroot/app');
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, '/wwwroot')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

// Set our api routes
const api = require('./routes');
app.use('/api', api);

app.get('*', (req, res) => {
    if (req.url === '/index' || req.url === '/') {
        res.render('index', function (err, html) {
            if (err) {
                console.log(err);
            } else {
                res.send(html);
            }
        });
    }
});

// servidor
http
    .createServer(app)
    .listen(app.get('port'), function () {
        console.log('Running in port ' + app.get('port'));
    });