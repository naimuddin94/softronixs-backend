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
});

module.exports = countrySchema;
