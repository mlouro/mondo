'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var router = require('../router');
var urls = require('../urls');
// sidebar views
var Sidebar = require('./Sidebar.jsx');
// content views
var Content = require('./Content.jsx');
var TodoBox = require('./todo/TodoBox.jsx');

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
    // routes
    router.on('route:index', this.index);
    // start history
    Backbone.history.start({pushState: false});
  },
  render: function() {
    console.log('Main:render');
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