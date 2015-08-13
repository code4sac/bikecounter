var Marionette = require('backbone.marionette');

var AppLayout = Marionette.LayoutView.extend({
	el: 'body',
	regions: {
		main: "#app-main--region"
	}
});


module.exports = AppLayout;