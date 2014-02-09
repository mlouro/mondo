'use strict';

var _ = require('underscore');
var React = require('react');
var LinkListItem = require('./LinkListItem.jsx');

var LinkList = React.createClass({
  render: function() {
    return (
      <ul>
        {this.props.items.map(LinkListItem, {
            handleLinkClick: this.props.handleLinkClick
        })}
      </ul>
    );
  }
});

module.exports = LinkList;