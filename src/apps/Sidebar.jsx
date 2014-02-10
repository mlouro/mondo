'use strict';

var _ = require('underscore');
var React = require('react');

var Sidebar = React.createClass({
  render: function() {
    console.log('Sidebar:render', this.props.active);
    return (
      <ul>
        {_.map(this.props.items, function(item, key) {
          return (
            <li className={item.name === this.props.active ? 'active' : ''}>
              <a href={item.href} data-name={item.name}>{item.title}</a>
            </li>
          )
        }.bind(this))}
      </ul>
    )
  }
});

module.exports = Sidebar;