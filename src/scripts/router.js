'use strict';

var Backbone = require('backbone');

var router = Backbone.Router.extend({

    // routes
    routes: {
        '': 'index'
    },

    initialize: function () {
        console.log('router');
    },

    index: function () {
        console.log('index');
    }

});

module.exports = router;
