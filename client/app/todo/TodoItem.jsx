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
    var todo = this.props.todo;
    var todoInfo;
    if (todo.complete) {
      todoInfo = React.DOM.span({'className': 'todo-status'},
        React.DOM.strong({'className': 'status completed'}, 'completed'),
        React.DOM.span({'children': moment(this.props.todo.endDate).format('MMMM Do YYYY [at] h:mm:ss a')})
      )
    } else {
      todoInfo = React.DOM.span({'className': 'todo-status'},
        React.DOM.strong({'className': 'status due'}, 'due'),
        React.DOM.span({'children': moment(this.props.todo.endDate, "YYYY-MM-DD").fromNow()})
      )
    }
    return (
      React.DOM.li({'className': 'todo-item'},
        React.DOM.label({},
          React.DOM.input({
              'type': 'checkbox',
              'onChange': this._toggleComplete,
              'checked': todo.complete
            },
            React.DOM.span({'children': todo.description})
          )
        ),
        todoInfo
      )
    );
  },
  componentWillUpdate: function() {
    log.debug('Todo:WillUpdate');
  }
});

module.exports = Todo;
