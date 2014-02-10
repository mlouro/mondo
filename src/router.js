'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
//var TodoBox = require('./apps/todo/TodoBox.jsx');

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
    var urlInList = href && _.some(this.urls, function(url) {
      return url.href === href;
    });
    // use pushState only when a valid url is set
    // TODO: improve the check
    if (urlInList) {
      // update sidebar state
      this.sidebarComponent.setState({active: $link.data('name')});
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
  },
  index: function() {
    console.log('route:index');
    // Sidebar
    /*
    this.sidebarComponent = React.renderComponent(
      Sidebar({active: 'dashboard', urls: this.urls}), document.getElementById('sidebar')
    );
    React.renderComponent(TodoBox({}), document.getElementById('content'));
    */
    //this.navigate('list', {trigger: true});
  },
  todo: function() {
    console.log('route:todo');
  },
  upcoming: function () {
    console.log('route:upcoming');
  },
  history: function () {
    console.log('route:upcoming');
  }
});

module.exports = new AppRouter();
