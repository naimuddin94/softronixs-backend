const mongoose = require("mongoose");
const leaderSchema = require("./leaderSchema");

const customerSchema = leaderSchema.discriminator(
  "Customer",
  mongoose.Schema({
    addedBy: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  })
);

module.exports = customerSchema;
