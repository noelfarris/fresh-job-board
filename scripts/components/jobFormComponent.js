var React = require('react');
var JobTipsComponent = require('./jobTipsComponent.js');

module.exports=React.createClass( {
	render:function() {
		return (

			<div className="formWrapper">
				<form className='newJobForm' onSubmit={this.onFormSubmitted}>
				<h3>Post your job</h3>
				<h1>Title</h1>
				<input type='text' ref='title' />
				<h1>Company Name</h1>
				<input type='text'  ref='company' />
				<h1>Location</h1>
				<input type='text' ref='location' />
				<h1>Description</h1>
				<textarea ref='description'></textarea>
				<h1>Tags</h1>
				<input type='text' ref='tags'/>
				<button>Submit Job</button>
				</form>
			</div>
			);
	},
	onFormSubmitted: function(e) {
		e.preventDefault();
		console.log(this.props.jobs);
		console.log(this.props.companies);
		var newJob = this.props.jobs.add({
			title: this.refs.title.getDOMNode().value,
			description: this.refs.description.getDOMNode().value,
			tags: this.refs.tags.getDOMNode().value
		});
		var newCompany = this.props.companies.add({
			name: this.refs.company.getDOMNode().value,
			location: this.refs.location.getDOMNode().value,
		});
		console.log(this.props.jobs);

	}
});