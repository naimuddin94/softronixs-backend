const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ["admin", "customer", "leader", "basic"],
    default: "basic",
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = userSchema;
