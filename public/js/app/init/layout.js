var app = require('../../app');
var AppLayout = require('../views/layout');

function initLayout() {
  app.layout = new AppLayout();
}

module.exports = initLayout;