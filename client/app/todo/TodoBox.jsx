'use strict';

var _ = require('underscore');
var React = require('react');
var TodoList = require('./TodoList.jsx');
var log = require('loglevel');

var TodoBox = React.createClass({
  getInitialState: function () {
    return {
      data: [{
        'name': 'initialContent',
      }]
    };
  },
  componentWillMount: function () {
    var data = _.bind(function () {
      this.setState({
        data: [{
          'name': 'hello',
        }, {
          'name': 'hello2',
        }, {
          'name': 'hello3',
        }, {
          'name': 'hello4',
        }]
      });
    }, this);
    _.delay(data, 1000);
  },
  render: function() {
    return (
      <div className="todoBox">
        <TodoList data={this.state.data}/>
      </div>
    );
  },

  shouldComponentUpdate: function(currentProps, nextProps) {
    log.info('TodoBox:shouldComponentUpdate');
  }
});

module.exports = TodoBox;