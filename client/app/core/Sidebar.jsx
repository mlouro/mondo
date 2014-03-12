'use strict';

var _ = require('underscore');
var React = require('react');
var log = require('loglevel');

var Sidebar = React.createClass({
  render: function() {
    log.info('Sidebar:render', this.props.active);
    return (
      <ul>
        {_.map(this.props.items, function(item, key) {
          return (
            <li key={key} className={item.name === this.props.active ? 'active' : ''}>
              <a href={item.href} data-name={item.name}>{item.title}</a>
            </li>
          )
        }.bind(this))}
      </ul>
    )
  }
});

module.exports = Sidebar;