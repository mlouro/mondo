
/**
 * Module dependencies.
 */

// Node.js
var express = require('express'),
    path = require('path'),
    app = express();

/**
 * App settings
 */
app.set('name', "Mondo - Monthly ToDo's");
app.set('port', process.env.PORT || 3000);


/**
 * Configuration
 */
app.configure(function () {
    app.use(express.cookieParser('#$(DASfdkj321#"$3287sad'));
    app.use(express.session());
    //app.use(express.basicAuth('username', 'password'));
    // static server
    app.use('/static', express.static(path.join(__dirname, 'public')));
    // app routes
    app.use(app.router);
});

// development only
app.configure('development', function () {
  app.use(express.errorHandler());
});


/**
 * Routes
 */

// global
app.get('*', function (req, res) {
    // render index.html always
    res.sendfile(__dirname + '/index.html');
});

/**
 * start server
 */
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
