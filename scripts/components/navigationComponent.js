var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<nav>
				<hr className="navHr" />
				<div className="logo">
				</div>
					<a className="fresh" href="#"><strong>FRESH JOBS</strong></a>
					
					<div>
						<a href="#">JOBS</a>
						<a href="#">COMPANIES</a>
						<a href="#">CITIES</a>
					</div>
					<div>
						<a href="#">WHY FRESH?</a>
						<a href="#">FOR EMPLOYERS</a>
					</div>
			</nav>
		)
	}
})