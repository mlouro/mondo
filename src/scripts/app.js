'use strict';

var _ = require('underscore'),
    jQuery = require('jquery'),
    Backbone = require('Backbone'),
    AppRouter = require('./router');

Backbone.$ = jQuery;

var app = _.extend({
    start: function () {
        this.router = new AppRouter();
        Backbone.history.start({pushState: true});
    }
});

window.app = app;
app.start();

module.exports = app;

