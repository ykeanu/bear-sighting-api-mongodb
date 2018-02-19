// DEPENDENCIES
// ================
const bearSightingRoutes = require('./bearSightingRoutes');
// ================

// EXPORT TO ./server
// ================
module.exports = function(app) {
  app.use('/', bearSightingRoutes);
};
// ================
