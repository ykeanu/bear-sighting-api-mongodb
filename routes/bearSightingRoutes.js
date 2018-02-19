// DEPENDENCIES
// ================
const express = require('express');
const router = express.Router();
const bear_sightings_controller = require('../controllers/bear_sightings_controller');
// ================

// BEAR SIGHTING ROUTES
// ================
router.post('/sighting', bear_sightings_controller.postBearSighting);
router.get('/sighting/search', bear_sightings_controller.getBearSightingsByQuery);
router.get('/sighting/search/:id', bear_sightings_controller.getBearSightingsById);
// ================

module.exports = router;
