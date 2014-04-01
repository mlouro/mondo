'use strict';

var _ = require('underscore');
var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  render: function () {
    var due = moment(this.props.endDate, "YYYY-MM-DD").fromNow();
    return (
      <li>
        <label>
          <input type="checkbox" /> {this.props.description}{" "}
          <strong>due</strong>{" "}{due}
        </label>
      </li>
    );
  }
});

module.exports = Todo;
