'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var $ = require('jquery');
var React = require('react');
var urls = require('./app/urls');
var MainView = require('./app/App.jsx');

// backbone > jQuery configuration
Backbone.$ = $;

// override click
$(document).on('click', 'a[href]', function (evt) {
  var $link = $(evt.currentTarget);
  var href = $link.attr('href');
  var urlInList = href && _.some(urls, function(url) {
    return url.href === href;
  });
  // use pushState only when a valid url is set
  // TODO: improve the check
  if (urlInList) {
    // navigate to url
    Backbone.history.navigate(href, {trigger: true});
    // internal link, return false
    return false;
  }
});

// start the app
React.renderComponent(MainView({}), document.getElementById('container'));