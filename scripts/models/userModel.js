var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults: {
		name: '',
		email: '',
		phone: null,
		id: null
	}
});