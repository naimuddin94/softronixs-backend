const mongoose = require("mongoose");

const countrySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = countrySchema;
