var Marionette = require('backbone.marionette');

var WelcomeView = Marionette.ItemView.extend({
  template: "#welcome--template"
});

module.exports = WelcomeView;