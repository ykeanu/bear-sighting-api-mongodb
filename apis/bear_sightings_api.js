const mongoose = require('mongoose');
const Bear = mongoose.model('bear');

// CREATE: User POSTS a new bear sighting | Template: <URL>/sighting
// ================
module.exports.postBearSighting = async (req, res) => {
  const { bear_type, notes, zip_code, num_bears, date_sighted } = req.body;
  console.log(req.body);

  const newBearSighting = {
    bear_type,
    notes,
    zip_code,
    num_bears,
    date_sighted
  };

  try {
    const bearSighting = await new Bear(newBearSighting).save();
    res.send(bearSighting);
  } catch (error) {
    res.status(500).send(error);
  }
};
// ================

// READ: User GETS bear sightings based on QUERY STRINGS | Template: <URL>/sighting/search?params=<USERQUERY>
// ================
module.exports.getBearSightingsByQuery = async (req, res) => {
  const queryParameter = req.query.params;
  let sort = {};

  switch (queryParameter) {
    case 'start_date':
      sort = { date_sighted: -1 };
      break;
    case 'end_date':
      sort = { date_sighted: 1 };
      break;
    case 'bear_type':
      sort = { bear_type: 1 };
      break;
    case 'zip_code':
      sort = { zip_code: 1 };
      break;
    case 'sort':
      sort = { num_bears: -1 };
      break;
  }
  try {
    const bearSightings = await Bear.find().sort(sort);
    res.send(bearSightings);
  } catch (error) {
    res.status(500).send(error);
  }
};
// ================

// READ -> User GETS a bear sighting based on UNIQUE ID |  Template: <URL>/sighting/search/:id
// ================
module.exports.getBearSightingById = async (req, res) => {
  const _id = req.params.id;

  try {
    const bearSighting = await Bear.findOne(_id);
    res.send(bearSighting);
  } catch (error) {
    res.status(500).send(error);
  }
};
// ================
