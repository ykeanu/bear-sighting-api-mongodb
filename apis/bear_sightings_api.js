// DEPENDENCIES
// ================
const mongoose = require('mongoose');
const Bear = mongoose.model('bear');
// ================

// CREATE -> User POSTS a new bear sighting
// ================
module.exports.postBearSighting = async (req, res) => {
  // object on request body
  const bearSighting = req.body;

  try {
  } catch (error) {
    res.status(500).send(error);
  }
};
// ================

// READ -> User GETS bear sightings based on QUERY STRINGS
// ================
module.exports.getBearSightingsByQuery = async (req, res) => {
  // sighting/search?search=<USERQUERY>
  const userQuery = req.query;

  try {
  } catch (error) {
    res.status(500).send(error);
  }
};
// ================

// READ -> User READS a bear sighting based on UNIQUE ID
// ================
module.exports.getBearSightingsById = async (req, res) => {
  // sighting/search/:id
  const bearSightingId = req.params.id;

  try {
  } catch (error) {
    res.status(500).send(error);
  }
};
// ================
