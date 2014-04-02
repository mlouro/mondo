'use strict';

var React = require('react');
var log = require('loglevel');
var urls = require('../../urls');
// core views
var Sidebar = require('../../components/Sidebar.jsx');
// todo box
var TodoBox = require('../TodoBox.jsx');
// store
var store = require('../todoStore');

var TodosView = React.createClass({
  getInitialState: function() {
    return {
      'todos': []
    }
  },
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
    log.info('Todos:render');
    return (
      <div id="main">
        <Sidebar active='todo' items={urls} />
        <div id="content" className="content">
          <h1>Todos</h1>
          <TodoBox todos={this.state.todos} />
        </div>
      </div>
    );
  }
});

module.exports = TodosView;