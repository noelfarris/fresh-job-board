var React = require('react');
var JobRowComponent = require('./jobRowComponent.js');
var CompanyBoxComponent = require('./companyBoxComponent.js')
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
		console.log(this.props.jobs);
		return (
			<div>
			<section className='jobList'>
				{jobList}
			</section>
			<CompanyBoxComponent company={this.props.company} />
			</div>
			);
	},
	componentWillMount: function() {
        var that = this;
        this.props.jobs.on('add', function() {
            that.forceUpdate();
        })
    }
})