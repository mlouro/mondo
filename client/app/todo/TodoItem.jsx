'use strict';

var _ = require('underscore');
var React = require('react');
var moment = require('moment');
var log = require('loglevel');
var todoActions = require('./todoActions');

var Todo = React.createClass({
  //
  // Toggle checkbox event handler
  //
  _toggleComplete: function() {
    todoActions.toggleComplete(this.props.todo);
  },
  render: function () {
    var due = moment(this.props.todo.endDate, "YYYY-MM-DD").fromNow();
    return (
      <li>
        <label>
          <input type="checkbox" 
            onChange={this._toggleComplete} 
            checked={this.props.todo.complete} /> {this.props.todo.description}{" "}
          <strong>due</strong>{" "}{due}
        </label>
      </li>
    );
  },
  componentWillUpdate: function() {
    log.debug('Todo:WillUpdate');
  }
});

module.exports = Todo;
