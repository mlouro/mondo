'use strict';

var _ = require('underscore');
var React = require('react');
var log = require('loglevel');
var Todo = require('./Todo.jsx');

var TodoList = React.createClass({
  render: function() {
    log.info('TodoList:render');
    return (
      <ul className="todoList">
        {this.props.data.map(Todo)}
      </ul>
    );
  }
});


module.exports = TodoList;

