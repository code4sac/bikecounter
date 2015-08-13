var Backbone = require('backbone');

var app = require('../../app');

function initNavigation() {
  Backbone.history.start({ pushState: true });
  var goto = Backbone.history.getFragment() || '/';
  app.router.navigate(goto, {trigger: true});
}

module.exports = initNavigation;