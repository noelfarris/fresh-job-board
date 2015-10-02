'use strict';
var React = require('react');
var Backbone = require('backbone');
var AppComponent = require('./components/appComponent.js');
var NavigationComponent = require('./components/navigationComponent.js');
var JobTipsComponent = require('./components/jobTipsComponent.js');
var JobFormComponent = require('./components/jobFormComponent.js');
var JobRowComponent = require('./components/jobRowComponent.js')
var JobsModel = require('./models/jobsModel.js');
var CompanyModel = require('./models/companyModel.js');
var CompanyBoxComponent = require('./components/companyBoxComponent.js');
var JobDetailsComponent = require('./components/jobDetailsComponent.js')
var CompanyData = require('./data/companyData.js');
var JobsData = require('./data/jobsData.js');
var JobListComponent = require('./components/jobListComponent.js');
var JobsCollection = require('./collections/jobsCollection.js');
var CompanyCollection = require('./collections/companyCollection.js');
var mainElement = document.getElementById('main-content');

var jobs = new JobsCollection();
var companies = new CompanyCollection();

var Router = Backbone.Router.extend({
    routes: {
        '': 'jobListPage',
        'jobListPage': 'jobListPage',
        'formPage': 'formPage',
        'detailsPage': 'detailsPage'
    },
    jobListPage: function() {
        React.render( < div >
            < NavigationComponent / >
            < JobListComponent jobs = {
                JobsData
            }
            company = {
                CompanyData
            }/> < /div>,
            mainElement
        );
    },
    formPage: function() {
        React.render( < section >
            < NavigationComponent / >
            < JobFormComponent jobs = {JobsData}
            companies = {CompanyData} />
            < JobTipsComponent />
            </section>,
            mainElement
        );
    },
    detailsPage: function() {
    	React.render(
    		< section >
    		 < NavigationComponent / >
    		 < JobDetailsComponent jobs = {
                JobsData
            }
            company = {
                CompanyData
    		}/>
    		<CompanyBoxComponent company={CompanyData} />
    		</section>,
    		mainElement
    	);
    }
})
var r = new Router();
Backbone.history.start();
