const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const leaderSchema = mongoose.Schema({
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
    unique: true,
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
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: String,
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

leaderSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(this.password, salt);
    this.password = hashPassword;
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = leaderSchema;
