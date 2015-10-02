var React = require('react');

module.exports=React.createClass( {
	render: function() {
		return (
			<section className='jobDetails'>
				<h3 className='title'>{this.props.job.get('title')}</h3>
				<span className="date">{this.props.job.get('date')}</span>
				<div>
					<span className='companyName'>{this.props.company.get('name')}</span>
					<span className='dot'>&middot;</span>
					<span className='location'>{this.props.company.get('location')}</span>
				</div>
				
				<div className='tags'>{this.props.job.get('tags')}</div>
				<p className="jobDesc">{this.props.job.get('description')}</p>
				<hr></hr>
			</section>
			);
	}
})