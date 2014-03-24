'use strict';

var _ = require('underscore');
var React = require('react');

var TodoForm = React.createClass({
  render: function () {
    return (
      <form method="post" action=".">
        <input type="text" name="description" value="" />
        <input type="text" name="description" value="" />
      </form>
    );
  }
});


module.exports = TodoForm;