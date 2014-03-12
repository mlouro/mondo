'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var urls = require('./urls');

var AppRouter = Backbone.Router.extend({
  // routes
  routes: {
    '': 'index',
    'todo': 'todo',
    'upcoming': 'upcoming',
    'history': 'history'
  },
  handleClick: function(evt) {
    // TODO: refactor this
    // handles click events on <a> elements
    // and redirects to href if it exists in this.urls
    var $link = $(evt.currentTarget);
    var href = $link.attr('href');
    var urlInList = href && _.some(urls, function(url) {
      return url.href === href;
    });
    // use pushState only when a valid url is set
    // TODO: improve the check
    if (urlInList) {
      // navigate to url
      this.navigate(href, {trigger: true});
      // internal link, return false
      return false;
    }
  },
  initialize: function() {
    _.bindAll(this, 'handleClick');
    // bind all a:click events so we use pushState
    // instead of page reloads.
    // If we don't want a specific <a> to trigger this
    // call evt.stopPropagation() inside the custom event handler.
    $('body').on('click', 'a', this.handleClick);
  }
});

module.exports = new AppRouter();
