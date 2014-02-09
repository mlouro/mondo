'use strict';

var _ = require('underscore');
var React = require('react');

var Todo = React.createClass({
  render: function () {
    return (
      <li>
        <input type="checkbox" /> {this.props.name}
      </li>
    );
  }
});


module.exports = Todo;