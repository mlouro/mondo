'use strict';

var _ = require('underscore');
var React = require('react');

var Sidebar = React.createClass({
  getInitialState: function() {
    return {
      pages: this.props.urls,
      active: this.props.active
    };
  },
  render: function() {
    return (
      <ul>
        {_.map(this.state.pages, function(item, key) {
          return (
            <li className={item.name === this.state.active ? 'active' : ''}>
              <a href={item.href} data-name={item.name}>{item.title}</a>
            </li>
          )
        }.bind(this))}
      </ul>
    )
  }
});

module.exports = Sidebar;