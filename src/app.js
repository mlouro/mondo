'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var jQuery = require('jquery');
  //Hoodie = require('hoodie'),
  //Hoodie = require('hoodie/src/hoodie'),
var AppRouter = require('./router');

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

