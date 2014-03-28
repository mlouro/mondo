'use strict';

var _ = require('underscore');
var React = require('react');
var config = require('../core/config');

var TodoForm = React.createClass({
  render: function () {
    return (
      React.DOM.form({
          'method': 'post',
          'action': '.'
        },
        React.DOM.input({
          'type': 'text',
          'name': 'description',
          'defaultValue': '',
          'placeholder': 'description'
        }),
        React.DOM.input({
          'type': 'date',
          'name': 'startDate',
          'defaultValue': '',
          'placeholder': 'start date'
        }),
        React.DOM.input({
          'type': 'date',
          'name': 'endDate',
          'defaultValue': '',
          'placeholder': 'end date'
        }),
        React.DOM.select({
            'name': 'recurring'
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