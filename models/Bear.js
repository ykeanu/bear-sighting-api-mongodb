const mongoose = require('mongoose');
const { Schema } = mongoose;

const bearSchema = new Schema({
  bear_type: 'grizzly',
  notes: 'It was a big one!',
  zip_code: 90210,
  num_bears: 3,
  date_sighted: '2018-02-10'
});

const Bear = mongoose.model('bear', bearSchema);

module.exports = Bear;