'use strict';
var React = require('react');
var AppComponent = require('./components/appComponent.js');
var mainElement = document.getElementById('main-content')
React.render(
		<AppComponent />,
		mainElement
	);