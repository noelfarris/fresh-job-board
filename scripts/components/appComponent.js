var React = require('react');
var NavigationComponent = require('./navigationComponent.js')
var JobTipsComponent = require('./jobTipsComponent.js');
var JobFormComponent = require('./jobFormComponent.js')
module.exports=React.createClass( {
	render:function() {
		return (
			<div>
				<NavigationComponent />
				<JobFormComponent />
				<JobTipsComponent />
				
			</div>
		)
	}
})