var React = require('react');
var JobRowComponent = require('./jobRowComponent.js');
module.exports=React.createClass( {
	render: function() {
		var companies = this.props.company;
		var jobList = this.props.jobs.map(function(job) {
			var companyId = job.get('companyId');
			var company = companies.get(companyId);
			return(
			<JobRowComponent job={job} company={company} />
			);
		});
		return (
			<section className='jobList'>
				{jobList}
			</section>
			);
	}
})