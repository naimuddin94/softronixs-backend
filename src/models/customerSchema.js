const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  whatsapp: {
    type: String,
  },
  skype: {
    type: String,
  },
  photo: {
    type: String,
    required: true,
  },
  NIDCopy: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
  },
  fullAddress: {
    type: String,
    required: true,
  },
  nidNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  addedBy: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = customerSchema;
