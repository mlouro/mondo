'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var jQuery = require('jquery');
var React = require('react');
var MainView = require('./apps/Main.jsx');

Backbone.$ = jQuery;

var app = _.extend({
  /*
   * App starting point
   */
  bootstrap: function () {
    // hoodie/database
    //this.hoodie = new Hoodie();
    // boot pushState/history
    React.renderComponent(MainView({}), document.getElementById('container'));
    return this;
  }
});

window.app = app.bootstrap();

module.exports = app;