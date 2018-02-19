// DEPENDENCIES
// ================
const mongoose = require('mongoose');
const { Schema } = mongoose;
// ================

// BEAR SCHEMA
// ================
const bearSchema = new Schema({
  bear_type: { type: String, required: true },
  notes: { type: String, default: 'None' },
  zip_code: { type: Number, required: true },
  num_bears: { type: Number, required: true },
  date_sighted: { type: Date, required: true }
});
// ================

const Bear = mongoose.model('bear', bearSchema);

module.exports = Bear;
