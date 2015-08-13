// This is where we register all the available controllers
var WelcomeController = require('../../welcome/controller');

var dependencyContainer = {};

dependencyContainer.controllers = {
  welcome: WelcomeController
};



module.exports = dependencyContainer;