'use strict';

var Backbone = require('backbone');

var AppRouter = Backbone.Router.extend({
  // routes
  routes: {
    '': 'index',
    'todo': 'todo',
    'upcoming': 'upcoming',
    'history': 'history'
  }
});

module.exports = new AppRouter();
