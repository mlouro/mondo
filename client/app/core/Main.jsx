'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var router = require('../router');
var urls = require('../urls');
// core views views
var Sidebar = require('./Sidebar.jsx');
var Content = require('./Content.jsx');
// todo views
var TodoBox = require('../todo/TodoBox.jsx');
// todo routes
var todo = require('../todo/routes');

var Main = React.createClass({
  getInitialState: function() {
    // initial sidebar and content
    // regardless of route. 
    // (this never renders? router is fast enough to do the state change?)
    return {
      'sidebar': Sidebar({active: '', items: urls}),
      'content': Content({})
    }
  },
  componentWillMount: function() {
    // --------------------
    // routes
    // --------------------
    // /         : index
    // /todo     : todo
    // /upcoming : upcoming
    // /history  : history
    //
    router.on('route:index', this.index);
    router.on('route:todo', todo.todo.bind(this));
    router.on('route:upcoming', todo.upcoming.bind(this));
    router.on('route:history', todo.history.bind(this));
    // start history
    Backbone.history.start({pushState: false});
  },
  render: function() {
    return (
      <div id="main">
        <div id="sidebar" className="sidebar">
          {this.state.sidebar}
        </div>
        <div id="content" className="content">
          {this.state.content}
        </div>
      </div>
    );
  },
  // pages
  index: function() {
    console.log('main:index');
    this.setState({
      sidebar: Sidebar({
        'active': 'dashboard',
        'items': urls
      }),
      content: TodoBox({})
    });
  }
});

module.exports = Main;