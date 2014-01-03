
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
    app.use(app.router);
    app.set('view engine', 'jade');
    app.set('views', path.join(__dirname, 'src', 'templates'));
    // static server
    app.use(express.static(path.join(__dirname, 'src', 'public')));
});

// development only
/*
app.configure('development', function () {
  app.use(express.errorHandler());
}
*/

/**
 * Routes
 */
var site = require('./src/apps/site/views'),
    todo = require('./src/apps/todo/api');

// global
app.get('/', site.index);

// todos
app.get('/todos', todo.list);


/**
 * start server
 */
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
