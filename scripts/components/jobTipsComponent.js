var React = require('react');

module.exports=React.createClass( {
	render:function() {
		return (
			<div className="tips">
			<h3 className='underline'>Tips for your job posting</h3>
			<h3><strong>Add Keywords</strong> because the majority of candidates search for available positions using keywords, make sure you use all relevant keywords in your posting.</h3>
			<h3><strong>Use Familiar Job Titles.</strong> Use specific but familiar job titles in your postings. Make sure the titles are clear and succinct.</h3>
			<h3><strong>Give Them Details.</strong> The purpose of posting a job is to spark a candidates interest in the available postition. When job postings have detailed description, candidates tend to apply to them more.</h3>
			<h3><strong>Expand Your Location.</strong> Do not limit your job posting to a restricted area around the job's location. Make sure to include surrounding cities and metropolitan areas in your searches.</h3>
			<h3><strong>Discuss Compensation.</strong> Even though you many not want to give exact compensation, give a range. Make sure to point out any bonuses, commissions, or non-monetary compensation, as well.</h3>
			</div>
			);
	}
});