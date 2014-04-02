'use strict';

var log = require('loglevel');
var hoodie = require('../store');

var todoStore = {
  //
  // get a list of active todo's
  // @param  {callback} on done
  //
  getActive: function(callback) {
    hoodie.store.findAll(function(object) {
      if(object.type === 'todo' && object.complete === false){
        return true;
      }
    }).done(callback);
  },
  //
  // get a list of upcoming todo's
  // @param  {callback} on done
  //
  getUpcoming: function(callback) {
    hoodie.store.findAll(function(object) {
      if(object.type === 'todo' && object.complete === true){
        return true;
      }
    }).done(callback);
  },
  //
  // get a list of completed todo's
  // @param  {callback} on done
  //
  getCompleted: function(callback) {
    hoodie.store.findAll(function(object) {
      if(object.type === 'todo' && object.complete === true){
        return true;
      }
    }).done(callback);
  }
};

module.exports = todoStore;
