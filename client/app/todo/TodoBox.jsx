'use strict';

var _ = require('underscore');
var React = require('react');
var TodoList = require('./TodoList.jsx');
var log = require('loglevel');

var TodoBox = React.createClass({
  render: function() {
    var todos = this.props.todos;
    log.debug('TodoBox', this.props.todos);
    return (
      React.DOM.div({'className': 'todoBox'},
        React.DOM.h1({
          'children': this.props.title ? this.props.title : ''
        }),
        todos && todos.length ? TodoList({'todos': todos}) : 'There are no Todo\'s in this list'
      )
    );
  }
});

module.exports = TodoBox;