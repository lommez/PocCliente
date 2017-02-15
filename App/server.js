var http = require('http');
var express = require('express');
var ejs = require('ejs');
var path = require('path');
var favicon = require('serve-favicon');

var app = module.exports = express();

app.engine('html', require('ejs').renderFile);
app.use(favicon(__dirname + '/wwwroot/favicon.png'));

// // configuracoes
// app.set('port', 3000);
// app.use(express.static(path.join(__dirname, '/wwwroot')));

// // views
// app.set('views', __dirname, '/wwwroot/app');
// app.set('view engine', 'html');
// app.engine('html', ejs.renderFile);

// app.use(express.static(__dirname + '/wwwroot'));
// app.use(express.static(__dirname + '/wwwroot/app/views'));
// app.use(express.static(__dirname + '/wwwroot/app'));
// app.set('views', __dirname + '/wwwroot/app');
// app.set('view engine', 'html');
// app.set('port', process.env.PORT || 3000);

// // rotas
// app.get('*', function (req, res) {
//     var stripped = req.url.split('.')[0];

//     var renderView = function (err, html) {
//         if (err) {
//             res.status(404).send('Not found');
//         } else {
//             res.send(html);
//         }
//     }

//     if (req.url === '/index' || req.url === '/') {
//         res.render('views/index', function (err, html) {
//             renderView(err, html);
//         });
//     } else {
//         var index = stripped.indexOf('/');
//         if (index >= 0){
//             stripped = stripped.slice(index + 1, stripped.length);
//         }

//         res.render(stripped, function(err, html){
//             renderView(err, html);
//         });
//     }
// });

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/wwwroot/app');
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, '/wwwroot')));
//app.use(app.router);


/********
 * Routes
 ********/

function serve_partial(req, res) {
  var stripped = req.url.split('.')[0];
  var views = app.get('views');
  var requestedView = path.join(views, stripped);
  res.render(requestedView, function (err, html) {
    if (err) {
      res.render('404');
    } else {
      res.send(html);
    }
  });
}

// serve index
// app.get('/', routes.index);
// app.get('*', serve_partial);

app.get('*', function (req, res) {
  var stripped = req.url.split('.')[0];

  if (req.url === '/index' || req.url === '/') {
    res.render('views/index', function (err, html) {
      if (err) {
        res.render('404');
      } else {
        res.send(html);
      }
    });
  } else {
    var index = stripped.indexOf('/', stripped);
    if (index >= 0) {
      stripped = stripped.slice(index + 1, stripped.length);
    }

    res.render(stripped, function (err, html) {
      if (err) {
        res.render('404');
      } else {
        res.send(html);
      }
    });
  }
});

// servidor
http
    .createServer(app)
    .listen(app.get('port'), function(){
        console.log('Running in port ' + app.get('port'));
    });