var React = require('react');
var NavigationComponent = require('./navigationComponent.js')
var JobTipsComponent = require('./jobTipsComponent.js');
var JobFormComponent = require('./jobFormComponent.js');
var JobRowComponent = require('./jobRowComponent.js')
var JobsModel = require('../models/jobsModel.js');
var CompanyModel = require('../models/companyModel.js');
var CompanyBoxComponent = require('./companyBoxComponent.js');

var JobsModel1 = new JobsModel({title: 'Senior Frontend Engineer', description: 'Senior Frontend Engineer sovle hard problems with a team of infastructure stuff.', date: new Date().toDateString(), 
	tags: ['angularjs', 'd3.js', 'javascript', 'UI','CSS']});
var CompanyModel1 = new CompanyModel({name: 'NSONE', location: 'New York, NY', logo: '../../images/featured-logo.jpg', bgImage: '../../images/featured.jpg'});
var CompanyModel2 = new CompanyModel({name: 'MaxPlay', location: 'Austin, Tx', logo: '../../images/featured-logo.jpg', bgImage: '../../images/featured.jpg'});
module.exports=React.createClass( {
	render:function() {
		return (
			<div>
				<NavigationComponent />
				<JobFormComponent />
				<JobTipsComponent />
				<JobRowComponent jobModel = {JobsModel1} compModel = {CompanyModel1} />
				<CompanyBoxComponent compModel = {CompanyModel2} />
			</div>
		)
	}
})