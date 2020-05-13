const mongoose = require('mongoose');

const AirportSchema = new mongoose.Schema({
  airport: {
    type: String,
    required: [true, 'Please add a airport'],
    trim: true,
  },
});

module.exports = mongoose.model('Airport', AirportSchema);
