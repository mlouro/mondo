'use strict';

var _ = require('underscore'),
    Backbone = require('backbone'),
    jQuery = require('jquery'),
    //Hoodie = require('hoodie'),
    //Hoodie = require('hoodie/src/hoodie'),
    AppRouter = require('./router');

Backbone.$ = jQuery;

var app = _.extend({

    /*
     * App starting point
     */
    bootstrap: function () {
        // routing
        this.router = new AppRouter();
        // hoodie/database
        //this.hoodie = new Hoodie();
        // boot pushState/history
        Backbone.history.start({pushState: true});

        return this;
    }

});

window.app = app.bootstrap();

module.exports = app;

