'use strict';

var React = require('react');
var log = require('loglevel');
var urls = require('../../urls');
// core views
var Sidebar = require('../../core/Sidebar.jsx');
// todo box
var TodoBox = require('../TodoBox.jsx');
// hoodie
var hoodie = require('../../store');

var TodosView = React.createClass({
  getInitialState: function() {
    return {
      'todos': []
    }
  },
  componentWillMount: function() {
    this.componentWillReceiveProps();
  },
  componentWillReceiveProps: function() {
    hoodie.store.findAll('todo').done(function(todos) {
      this.setState({'todos': todos});
    }.bind(this));
  },
  render: function() {
    log.info('Todos:render');
    return (
      <div id="main">
        <Sidebar active='todo' items={urls} />
        <div id="content" className="content">
          <TodoBox todos={this.state.todos} />
        </div>
      </div>
    );
  }
});

module.exports = TodosView;