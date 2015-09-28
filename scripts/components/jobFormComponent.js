var React = require('react');

module.exports=React.createClass( {
	render:function() {
		return (
			<div className="formWrapper">
				<h3>Post your job</h3>
				<h1>Title</h1>
				<input type='text' />
				<h1>Company Name</h1>
				<input type='text' />
				<h1>Location</h1>
				<input type='text' />
				<h1>Description</h1>
				<textarea></textarea>
				<h1>Tags</h1>
				<input type='text' />
				<button>Submit Job</button>
			</div>
			);
	}
});