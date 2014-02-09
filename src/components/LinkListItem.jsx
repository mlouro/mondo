'use strict';

var _ = require('underscore');
var React = require('react');

var LinkListItem = React.createClass({
  render: function() {
    return (
      <li>
        <a href={this.props.href}>{this.props.title}</a>
      </li>
    );
  }
});

module.exports = LinkListItem;