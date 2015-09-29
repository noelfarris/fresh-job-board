var React = require('react');
var NavigationComponent = require('./navigationComponent.js')
var JobTipsComponent = require('./jobTipsComponent.js');
var JobFormComponent = require('./jobFormComponent.js');
var JobRowComponent = require('./jobRowComponent.js')
var JobsModel = require('../models/jobsModel.js');
var CompanyModel = require('../models/companyModel.js');

var JobsModel1 = new JobsModel({title: 'Senior Frontend Engineer', description: 'Senior Frontend Engineer sovle hard problems with a team of infastructure stuff.', date: Date(), 
	tags: ['angularjs', 'd3.js', 'javascript', 'UI','CSS']})
var CompanyModel1 = new CompanyModel({name: 'NSONE', location: 'New York, NY'})
module.exports=React.createClass( {
	render:function() {
		return (
			<div>
				<NavigationComponent />
				<JobFormComponent />
				<JobTipsComponent />
				<JobRowComponent jobModel = {JobsModel1} compModel = {CompanyModel1} />
			</div>
		)
	}
})