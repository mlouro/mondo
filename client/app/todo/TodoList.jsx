'use strict';

var _ = require('underscore');
var React = require('react');
var TodoItem = require('./TodoItem.jsx');
var log = require('loglevel');

var TodoList = React.createClass({
  render: function() {
    log.info('TodoList:render');
    return (
      React.DOM.ul(
        {'className': 'todo-list'},
        this.props.todos.map(function(todo, index) {
          return TodoItem({'key': index, 'todo': todo});
        }.bind(this))
      )
    );
  }
});


module.exports = TodoList;
