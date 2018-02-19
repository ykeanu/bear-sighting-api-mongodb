// DEPENDENCIES
// ================
const mongoose = require('mongoose');
const db = require('../models');
// ================

mongoose.Promise = global.Promise;
const mongoURI =
  'mongodb://izzykeanu:password@ds241668.mlab.com:41668/bear-sighting';
mongoose.connect(mongoURI);

module.exports = async () => {
  const bearSightingsSeed = [
    {
      bear_type: 'grizzly',
      notes: 'It was a big one!',
      zip_code: 90210,
      num_bears: 1,
      date_sighted: '2018-02-10'
    },
    {
      bear_type: 'black',
      notes: 'Family of four!',
      zip_code: 90045,
      num_bears: 4,
      date_sighted: '2018-02-04'
    },
    {
      bear_type: 'brown',
      notes: 'Mama bear catching salmon with child',
      zip_code: 92557,
      num_bears: 2,
      date_sighted: '2018-02-07'
    }
  ];

  try {
    await db.Bear.remove({});
    const data = await db.Bear.collection.insertMany(bearSightingsSeed);
    console.log(`${data.insertedCount} bear sightings successfully seeded`);
    return;
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
