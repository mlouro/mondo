'use strict';

var _ = require('underscore'),
    React = require('react');

var Todo = React.createClass({
    render: function () {
        console.log('Todo:render');
        return (
            <li>
                <input type="checkbox" /> {this.props.name}
            </li>
        );
    }
});


module.exports = Todo;