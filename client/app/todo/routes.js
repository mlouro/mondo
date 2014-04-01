'use strict';

var _ = require('underscore');
var log = require('loglevel');
var urls = require('../urls');
// core views
var Sidebar = require('../core/Sidebar.jsx');
var Content = require('../core/Content.jsx');
// todo box
var TodoBox = require('./TodoBox.jsx');
// hoodie
var hoodie = require('../store');

module.exports = {
  todo: function() {
    log.info('main:todo');
    
    // intiial render
    this.setState({
      'sidebar': Sidebar({
        'active': 'todo',
        'items': urls
      }),
      'content': TodoBox({
        'loading': true,
        'todos': []
      })
    });

    // hoodie is not asynchronous
    hoodie.store.findAll('todo').done(function(todos) {
      log.info('hoodie.findAll(todo)', todos);
      this.setState({
        'content': TodoBox({
        'title': 'To-do',
          'loading': false,
          'todos': todos
        })
      });
    }.bind(this));
  },
  upcoming: function() {
    log.info('main:upcoming');
    // get data
    var todos = hoodie.store.findAll('todo');

    this.setState({
      'sidebar': Sidebar({
        'active': 'upcoming',
        'items': urls
      }),
      'content': TodoBox({
        'title': 'Upcoming',
        'loading': true,
        'todos': []
      })
    });
  },
  history: function() {
    log.info('main:history');
    // get data
    var todos = hoodie.store.findAll('todo');

    this.setState({
      'sidebar': Sidebar({
        'active': 'history',
        'items': urls
      }),
      'content': TodoBox({
        'title': 'History',
        'loading': true,
        'todos': []
      })
    });
  }
};