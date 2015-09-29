var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults: {
		name: '',
		location: '',
		id: null
	}
});