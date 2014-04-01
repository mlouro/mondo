'use strict';

var React = require('react');
var urls = require('../../urls');
// core views
var Sidebar = require('../../components/Sidebar.jsx');
// todo box
var TodoBox = require('../TodoBox.jsx');
var TodoForm = require('../TodoForm.jsx');

var IndexView = React.createClass({
  render: function() {
    return (
      <div id="main">
        <Sidebar active='dashboard' items={urls} />
        <div id="content" className="content">
          <TodoBox />
          <TodoForm />
        </div>
      </div>
    );
  }
});

module.exports = IndexView;