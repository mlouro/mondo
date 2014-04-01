'use strict';

var React = require('react');
var urls = require('../../urls');
// core views
var Sidebar = require('../../components/Sidebar.jsx');
// todo box
var TodoBox = require('../TodoBox.jsx');
// hoodie
var hoodie = require('../../store');

var UpcomingView = React.createClass({
  getInitialState: function() {
    return {
      'todos': []
    }
  },
  componentWillUpdate: function() {
    hoodie.store.findAll('todo').done(function(todos) {
      this.setState('todos', todos);
    });
  },
  render: function() {
    return (
      <div id="main">
        <Sidebar active='upcoming' items={urls} />
        <div id="content" className="content">
          <TodoBox todos={this.state.todos} />
        </div>
      </div>
    );
  }
});

module.exports = UpcomingView;