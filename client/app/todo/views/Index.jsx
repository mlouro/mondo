'use strict';

var React = require('react');
var urls = require('../../urls');
// core views
var Sidebar = require('../../components/Sidebar.jsx');
// todo box
var TodoBox = require('../TodoBox.jsx');
var TodoForm = require('../TodoForm.jsx');
// store
var store = require('../todoStore');

var IndexView = React.createClass({
  componentWillMount: function() {
    // refresh state on mount and update
    store.getActive(this.updateState);
  },
  componentWillReceiveProps: function() {
    store.getActive(this.updateState);
  },
  updateState: function(todos) {
    this.setState({'todos': todos});
  },
  render: function() {
    return (
      <div id="main">
        <Sidebar active='dashboard' items={urls} />
        <div id="content" className="content">
          <h1>Todos</h1>
          <TodoBox todos={this.state.todos} />
          <h2>Create To-do</h2>
          <TodoForm />
        </div>
      </div>
    );
  }
});

module.exports = IndexView;