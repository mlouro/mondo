'use strict';

var _ = require('underscore');
var log = require('loglevel');
var urls = require('../urls');
// core views
var Sidebar = require('../core/Sidebar.jsx');
var Content = require('../core/Content.jsx');
// todo box
var TodoBox = require('./TodoBox.jsx');

module.exports = {
  todo: function() {
    log.info('main:todo');
    this.setState({
      sidebar: Sidebar({
      'active': 'todo',
      'items': urls
      }),
      content: TodoBox({})
    });
  },
  upcoming: function() {
    log.info('main:upcoming');
    this.setState({
      sidebar: Sidebar({
      'active': 'upcoming',
      'items': urls
      }),
      content: TodoBox({})
    });
  },
  history: function() {
    log.info('main:history');
    this.setState({
      sidebar: Sidebar({
      'active': 'history',
      'items': urls
      }),
      content: TodoBox({})
    })
  }
};