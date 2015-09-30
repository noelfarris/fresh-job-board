var JobsCollection = require('../collections/jobsCollection');

module.exports = new JobsCollection([
	{title: 'Sandwich Artist', descrption: "Come to work and make some sandwiches, deal with dumb customers", date: new Date().toDateString(), tags: ['sandwhiches', 'annoying', 'bread'], id: 1, companyId: 1},
	{title: 'Sunglasses Sales', descrption: "Work at a kiosk in the mall selling sunglasses" , date: new Date().toDateString(), tags: ['glasses', 'sun', 'foodcourt'], id: 2, companyId: 2},
	{title: 'Coffe Drinker', descrption: "Drink the bean based sludge like beverage and get wired all day, every day", date: new Date().toDateString(), tags: ['sludge', 'wired', 'cafe'], id: 3, companyId: 3},
	{title: 'Wallpaper theft prevention', descrption: "Come to my house and make sure nobody steals my wallpaper", date: new Date().toDateString(), tags: ['kids', 'bad people', 'I hate crime'], id: 4, companyId: 4},
	{title: 'do dishes', descrption: 'Come to my house and do my dishes', date: new Date().toDateString(), tags: ["help", "clean", "I'm lazy"], id: 5, companyId: 4},
]);