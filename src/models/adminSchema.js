const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const leaderSchema = require("./leaderSchema");

const adminSchema = mongoose.Schema(leaderSchema);

module.exports = adminSchema;
