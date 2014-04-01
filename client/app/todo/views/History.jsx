'use strict';

var React = require('react');
var urls = require('../../urls');
// core views
var Sidebar = require('../../components/Sidebar.jsx');
// todo box
var TodoBox = require('../TodoBox.jsx');
// hoodie
var hoodie = require('../../store');

var HistoryView = React.createClass({
  getInitialState: function() {
    return {
      'todos': []
    }
  },
  componentWillUpdate: function() {
    hoodie.store.findAll('todo').done(function(object) {
      if(object.type === 'todo' && object.complete === true){
        return true;
      }
      this.setState('todos', todos);
    });
  },
  render: function() {
    return (
      <div id="main">
        <Sidebar active='history' items={urls} />
        <div id="content" className="content">
          <TodoBox todos={this.state.todos} />
        </div>
      </div>
    );
  }
});

module.exports = HistoryView;