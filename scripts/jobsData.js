var JobsCollection = require('../collections/jobsCollection');

module.exports = new JobsCollection([
	{title: 'Sandwich Artist', description: "Come to work and make some sandwiches, deal with dumb customers", date: new Date(), tags: ['sandwhiches', 'annoying', 'bread'], id: 1},
	{title: 'Sunglasses Sales', description: "Work at a kiosk in the mall selling sunglasses", date: new Date(), tags: ['glasses', 'sun', 'foodcourt'], id: 2},
	{title: 'Coffe Drinker', description: "Drink the bean based sludge like beverage and get wired all day, every day", date: new Date(), tags: ['sludge', 'wired', 'cafe'], id: 3},
	{title: 'Wallpaper theft prevention', description: "Come to my house and make sure nobody steals my wallpaper", date: new Date(), tags: ['kids', 'bad people', 'I hate crime'], id: 4},
	{title: 'do dishes', description: 'Come to my house and do my dishes', date: new Date(), tags: ["help", "clean", "I'm lazy"], id: 5},
]);