var React = require('react');

module.exports=React.createClass( {
	render: function() {
		return (
			<section className='companyBox'>
				<h2 className ='companyInfo'>Company Information</h2>
				<img className='bgImage' src={this.props.compModel.get('bgImage')}></img>
				<img className='logo' src={this.props.compModel.get('logo')}></img>
				<h1 className='compName'>{this.props.compModel.get('name')}</h1>
				<h3 className='compLocation'>{this.props.compModel.get('location')}</h3>
			</section>
			);
	}
})