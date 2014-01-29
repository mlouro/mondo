'use strict';

var _ = require('underscore'),
    React = require('react'),
    TodoList = require('./TodoList.jsx');

var TodoBox = React.createClass({
    getInitialState: function () {
        return {
            data: [{
                'name': 'initialContent',
            }]
        };
    },
    componentWillMount: function () {
        var data = _.bind(function () { 
            this.setState({
                data: [{
                    'name': 'hello',
                }, {
                    'name': 'hello2',
                }, {
                    'name': 'hello3',
                }, {
                    'name': 'hello4',
                }]
            });
        }, this);
        _.delay(data, 1000);
    },
    render: function() {
        console.log('TodoBox:render');
        return (
            <div className="todoBox">
                <TodoList data={this.state.data}/>
            </div>
        );
    }
});


module.exports = TodoBox;

