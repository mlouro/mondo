'use strict';

var _ = require('underscore');
var React = require('react');
var log = require('loglevel');
var Todo = require('./Todo.jsx');

var TodoList = React.createClass({
  render: function() {
    log.info('TodoList:render');
    return (
      React.DOM.ul(
        {'className': 'todoList'},
        this.props.data.map(function(todo, index) {
          return Todo(_.extend({'key': index}, todo));
        }.bind(this))
      )
    );
  }
});


module.exports = TodoList;
