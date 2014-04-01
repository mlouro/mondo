'use strict';

var _ = require('underscore');
var React = require('react');
var config = require('../core/config');
var hoodie = require('../store');

var TodoForm = React.createClass({
  getInitialState: function() {
    return {
      'description': '',
      'startDate': '',
      'endDate': '',
      'recurring': ''
    }
  },
  handleSubmit: function() {
    var data = {
      'description': this.refs.description.getDOMNode().value,
      'startDate': this.refs.startDate.getDOMNode().value,
      'endDate': this.refs.endDate.getDOMNode().value,
      'recurring': this.refs.recurring.getDOMNode().value
    }
    hoodie.store.add('todo', data);
    return false;
  },
  render: function() {
    return (
      React.DOM.form({
          'method': 'post',
          'action': '.',
          'onSubmit': this.handleSubmit
        },
        React.DOM.input({
          'type': 'text',
          'ref': 'description',
          'defaultValue': '',
          'placeholder': 'description',
          'required': true
        }),
        React.DOM.input({
          'type': 'date',
          'ref': 'startDate',
          'defaultValue': '',
          'placeholder': 'start date',
          'required': true
        }),
        React.DOM.input({
          'type': 'date',
          'ref': 'endDate',
          'defaultValue': '',
          'placeholder': 'end date',
          'required': true
        }),
        React.DOM.select({
            'ref': 'recurring',
            'required': true
          },
          _.map(config.recurring, function(name, key) {
            return React.DOM.option({
              'value': key,
              'children': name
            })
          })
        ),
        React.DOM.p({},
          React.DOM.button({
            'type': 'submit',
            'children': 'Add'
          })
        )
      )
    );
  }
});


module.exports = TodoForm;