'use strict';

var Backbone = require('backbone'),
    React = require('react'),
    TodoBox = require('./apps/todo/TodoBox.jsx');

var router = Backbone.Router.extend({

    // routes
    routes: {
        '': 'index'
    },

    initialize: function () {
        console.log('router');
    },

    index: function () {
        console.log('router:index');
        React.renderComponent(TodoBox({}), document.getElementById('content'));
    }

});

module.exports = router;
