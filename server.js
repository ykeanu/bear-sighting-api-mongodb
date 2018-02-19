// DEPENDENCIES
// ================
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// ================

const app = express();
const PORT = process.env.PORT || 3000;

// MIDDLEWARE
// ================
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
// ================

// DATABASE
// ================
require('./models');
mongoose.connect(
  'mongodb://izzykeanu:password@ds241668.mlab.com:41668/bear-sighting'
);
// ================

// ROUTES
// ================
require('./routes')(app);
// ================

// SERVER VALIDATION
// ================
app.listen(PORT, () => {
  console.log('Server runs on port: ' + PORT);
});
// ================
