'use strict';

var _ = require('underscore'),
    React = require('react'),
    Todo = require('./Todo.jsx');

var TodoList = React.createClass({
    render: function() {
        console.log('TodoList:render');
        return (
            <ul className="todoList">
                {this.props.data.map(Todo)}
            </ul>
        );
    }
});


module.exports = TodoList;

