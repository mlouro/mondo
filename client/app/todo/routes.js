'use strict';

var _ = require('underscore');
var urls = require('../urls');
// core views
var Sidebar = require('../core/Sidebar.jsx');
var Content = require('../core/Content.jsx');
// todo box
var TodoBox = require('./TodoBox.jsx');

module.exports = {
  todo: function() {
    console.log('main:todo');
    this.setState({
      sidebar: Sidebar({
      'active': 'todo',
      'items': urls
      }),
      content: TodoBox({})
    });
  },
  upcoming: function() {
    console.log('main:upcoming');
    this.setState({
      sidebar: Sidebar({
      'active': 'upcoming',
      'items': urls
      }),
      content: TodoBox({})
    });
  },
  history: function() {
    console.log('main:history');
    this.setState({
      sidebar: Sidebar({
      'active': 'history',
      'items': urls
      }),
      content: TodoBox({})
    })
  }
};