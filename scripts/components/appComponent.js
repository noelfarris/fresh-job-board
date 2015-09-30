var React = require('react');
var NavigationComponent = require('./navigationComponent.js')
var JobTipsComponent = require('./jobTipsComponent.js');
var JobFormComponent = require('./jobFormComponent.js');
var JobRowComponent = require('./jobRowComponent.js')
var JobsModel = require('../models/jobsModel.js');
var CompanyModel = require('../models/companyModel.js');
var CompanyBoxComponent = require('./companyBoxComponent.js');
var CompanyData = require('../data/companyData.js');
var JobsData = require('../data/jobsData.js');
var JobListComponent = require('./jobListComponent.js');

module.exports=React.createClass( {
	render:function() {
		return (
			<div>
				<NavigationComponent />
				<JobFormComponent />
				<JobTipsComponent />
				<JobListComponent jobs = {JobsData} company = {CompanyData} />
				<CompanyBoxComponent company = {CompanyData} />
			</div>
		)
	}
})