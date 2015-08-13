var app = require('../app');
var WelcomeView = require('./views/welcome');

function WelcomeController() {}

WelcomeController.welcome = function welcome() {
  var view = new WelcomeView();
  app.layout.getRegion('main').show(view);
};

module.exports = WelcomeController;