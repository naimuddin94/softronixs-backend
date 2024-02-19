const mongoose = require("mongoose");

// Define a sub-schema for the elements in the countryPriceList array
const countryPriceSchema = mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  countryPriceList: [countryPriceSchema],
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = categorySchema;
