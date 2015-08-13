var Marionette = require('backbone.marionette');

var app = require('../../app');
var routes = require('../../config/routes');
var controllers = require('../services/dependency-container').controllers;

function initRouter() {
  for (var module in routes) {
    if (controllers[module]) {
      app.router = new Marionette.AppRouter({
        controller: controllers[module],
        appRoutes: routes[module]
      })
    }
  }
}

module.exports = initRouter;