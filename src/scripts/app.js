'use strict';

var _ = require('underscore'),
    jQuery = require('jquery'),
    Backbone = require('backbone'),
    AppRouter = require('./router');

Backbone.$ = jQuery;

var app = _.extend({
    bootstrap: function () {
        this.router = new AppRouter();
        Backbone.history.start({pushState: true});
    }
});

window.app = app;
app.bootstrap();

module.exports = app;

