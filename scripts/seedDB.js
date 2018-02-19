const seedBearSightings = require('./seedBearSightings');

(async () => {
	await seedBearSightings();

	console.log('seed successful');

	process.exit(0);
})();