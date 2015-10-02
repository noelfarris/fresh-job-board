// var React = require('react');
// var Backbone = require('backbone');
// var NavigationComponent = require('./navigationComponent.js');
// var JobTipsComponent = require('./jobTipsComponent.js');
// var JobFormComponent = require('./jobFormComponent.js');
// var JobRowComponent = require('./jobRowComponent.js')
// var JobsModel = require('../models/jobsModel.js');
// var CompanyModel = require('../models/companyModel.js');
// var CompanyBoxComponent = require('./companyBoxComponent.js');
// var CompanyData = require('../data/companyData.js');
// var JobsData = require('../data/jobsData.js');
// var JobListComponent = require('./jobListComponent.js');
// var JobsCollection = require('../collections/jobsCollection.js');
// var CompanyCollection = require('../collections/companyCollection.js');
// var mainElement = document.getElementById('main-content');

// var jobs = new JobsCollection();
// var companies = new CompanyCollection();

// module.exports = React.createClass({
//     render: function() {
        // return ( < div >
        //     < NavigationComponent / >
        //     < JobFormComponent jobs = {
        //         JobsData
        //     }
        //     companies = {
        //         CompanyData
        //     }
        //     /> < JobTipsComponent / >
        //     < JobListComponent jobs = {
        //         JobsData
        //     }
        //     company = {
        //         CompanyData
        //     }
        //     /> < CompanyBoxComponent company = {
        //         CompanyData
        //     }
        //     /> < /div>
        // )
//     },
//     componentWillMount: function() {
//         var that = this;
//         JobsData.on('add', function() {
//             that.forceUpdate();
//         })
//         var Router = Backbone.Router.extend({
//             routes: {
//                 '': 'jobListPage'
//             },
//             jobListPage: function() {
//                 React.render( 
//                 	<div>
//                 	< NavigationComponent / >
//                 	< JobListComponent jobs={JobsData} company={CompanyData} />
//                     </div>,
//                     mainElement
//                 );
//             }
//         })
//         var r = new Router();
// 		Backbone.history.start();
//     }
// })
