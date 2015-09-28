var React = require('react');

module.exports=React.createClass( {
	render:function() {
		return (
		<section className="navbar">	
		<div className="navWrapper">
			<div className='imgWrapper'>	
				<img src='../../images/logo.png' />
			</div>
			<span>Fresh Jobs</span>
			<a href="#">JOBS</a>
			<a href="#">COMPANIES</a>
			<a href="#">CITIES</a>
			<a href="#">WHY FRESH?</a>
			<a href="#">FOR EMPLOYERS</a>
		</div>
		</section>
			)
	}
})	