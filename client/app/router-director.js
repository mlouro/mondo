'use strict';

var director = require('director');
var _ = require('underscore');
var React = require('react');
var TodoBox = require('./apps/todo/TodoBox.jsx');

var router = {

  routes: {
    '/': 'index',
    '/list': 'list',
    '/detail': 'detail'
  },

  boostrap: function() {
    _.bindAll(this, 'all', 'index', 'list', 'detail');
    this.director = director.Router(this.routes).configure({
        resource: this,
        html5history: true,
        on: this.all
      });
    this.director.init();
    return this;
  },

  all: function() {
    console.log('all');
  },

  index: function() {
    console.log('index');
    React.renderComponent(TodoBox({}), document.getElementById('content'));
    this.director.setRoute('list');
  },

  list: function() {
    console.log('list');
    this.director.setRoute('detail');
  },

  detail: function () {
    console.log('detail');
  }
};

module.exports = router;