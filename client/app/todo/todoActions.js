'use strict';

var log = require('loglevel');
var hoodie = require('../store');

var TodoActions = {
  // store item type
  TYPE: 'todo',

  //
  // Toggle whether a single ToDo is complete
  // @param  {object} todo
  //
  toggleComplete: function(todo) {
    // reverse todo.complete
    var complete = todo.complete ? false : true;
    // update store
    log.info('todoActions:toggleComplete', complete);
    hoodie.store.update(this.TYPE, todo.id, {'complete': complete});
  }
};

module.exports = TodoActions;
