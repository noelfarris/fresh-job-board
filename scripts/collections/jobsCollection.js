var Backbone = require('backbone');
var JobsModel = require('../models/jobsModel.js');

module.exports = Backbone.Collection.extend({
	model: JobsModel
});