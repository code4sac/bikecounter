// Browserify entry file

var $ = require('jquery');

var app = require('./app');
var initRouter = require('./app/init/router');
var initLayout = require('./app/init/layout');
var initNavigation = require('./app/init/navigation');

app.on('start', onStart);
$(document).on('ready', function() {
  app.start();
});

function onStart() {
  initRouter();
  initLayout();
  initNavigation();
}
