'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var log = require('loglevel');
// todo views
var IndexView = require('./todo/views/Index.jsx');
var TodosView = require('./todo/views/Todos.jsx');
var UpcomingView = require('./todo/views/Upcoming.jsx');
var HistoryView = require('./todo/views/History.jsx');
// hoodie
var hoodie = require('./store');

var Main = React.createClass({
  getInitialState: function() {
    // initial route
    return {
      'route': 'index'
    }
  },
  componentWillMount: function() {
    // 
    // URL Router
    // /          -> views/Index
    // /todo      -> views/Todos
    // /upcoming  -> views/Upcoming
    // /todo      -> views/History
    // 
    var router = new Backbone.Router();
    router.route('', _.partial(this.setState, {'route': 'index'}).bind(this));
    router.route('todo', _.partial(this.setState, {'route': 'todo'}).bind(this));
    router.route('upcoming', _.partial(this.setState, {'route': 'upcoming'}).bind(this));
    router.route('history', _.partial(this.setState, {'route': 'history'}).bind(this));

    // start history
    Backbone.history.start({pushState: false});

    // force update
    hoodie.store.on('change', function() {
      this.forceUpdate();
    }.bind(this));
  },
  render: function() {
    switch (this.state.route) {
      case 'index':
        return IndexView();
        break;
      case 'todo':
        return TodosView();
        break;
      case 'upcoming':
        return UpcomingView();
        break;
      case 'history':
        return HistoryView();
        break;
      default:
        break;
    }
  }
});

module.exports = Main;