var React = require('react');

module.exports=React.createClass( {
	render: function() {
		return (
			<section className='jobRow'>
				<h3 className='title'>{this.props.jobModel.get('title')}</h3>
				<span className="date">{this.props.jobModel.get('date')}</span>
				<span className='companyName'>{this.props.compModel.get('name')}</span>
				<span className='location'>{this.props.compModel.get('location')}</span>
				<p className="jobDesc">{this.props.jobModel.get('description')}</p>
				<div className='tags'>{this.props.jobModel.get('tags')}</div>
			</section>
			);
	}
})