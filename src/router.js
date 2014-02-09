'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var Sidebar = require('./components/Sidebar.jsx');
var TodoBox = require('./apps/todo/TodoBox.jsx');

var AppRouter = Backbone.Router.extend({
  // routes
  urls: [{
    name: 'dashboard',
    title: 'Dashboard',
    href: '/'
  }, {
    name: 'current',
    title: 'Current',
    href: '/current'
  }, {
    name: 'upcoming',
    title: 'Upcoming',
    href: '/upcoming'
  }],
  routes: {
    '': 'index',
    'current': 'current',
    'upcoming': 'upcoming'
  },
  handleClick: function(evt) {
    // handles click events 
    // and redirects to a url when appopriate
    var $link = $(evt.currentTarget);
    var href = $link.attr('href');
    var active = $link.data('name');
    var urlInList = href && _.some(this.urls, function(url) {
      return url.href === href;
    });
    // use pushState only when a valid url is set
    // TODO: improve the check
    if (urlInList) {
      // update sidebar state
      this.sidebarComponent.setState({active: active});
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
    // If we don't want a specific a to trigger this
    // call evt.stopPropagation() inside the custom event handler.
    $('body').on('click', 'a', this.handleClick);
  },
  index: function() {
    // Sidebar
    this.sidebarComponent = React.renderComponent(
      Sidebar({active: 'dashboard', urls: this.urls}), document.getElementById('sidebar')
    );
    React.renderComponent(TodoBox({}), document.getElementById('content'));
    //this.navigate('list', {trigger: true});
  },
  current: function() {
    console.log('route:current');
  },
  upcoming: function () {
    console.log('route:upcoming');
  }
});

module.exports = new AppRouter();
