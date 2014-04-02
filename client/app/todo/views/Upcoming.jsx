'use strict';

var React = require('react');
var urls = require('../../urls');
// core views
var Sidebar = require('../../components/Sidebar.jsx');
// todo box
var TodoBox = require('../TodoBox.jsx');
// store
var store = require('../todoStore');

var UpcomingView = React.createClass({
  getInitialState: function() {
    return {
      'todos': []
    }
  },
  componentWillMount: function() {
    // refresh state on mount and update
    store.getUpcoming(this.updateState);
  },
  componentWillReceiveProps: function() {
    store.getUpcoming(this.updateState);
  },
  updateState: function(todos) {
    this.setState({'todos': todos});
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