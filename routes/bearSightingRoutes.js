// DEPENDENCIES
// ================
const express = require('express');
const router = express.Router();
const bear_sightings_api = require('../apis/bear_sightings_api');
// ================

// BEAR SIGHTING ROUTES
// ================
router.post('/sighting', bear_sightings_api.postBearSighting);
router.get('/sighting/search', bear_sightings_api.getBearSightingsByQuery);
router.get('/sighting/search/:id', bear_sightings_api.getBearSightingById);
// ================

module.exports = router;
