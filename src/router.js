'use strict';

var Backbone = require('backbone');
var React = require('react');
var TodoBox = require('./apps/todo/TodoBox.jsx');

var router = Backbone.Router.extend({
  // routes
  routes: {
    '': 'index'
  },
  index: function () {
    React.renderComponent(TodoBox({}), document.getElementById('content'));
  }
});

module.exports = router;
