const leaderSchema = require("./leaderSchema");

const adminSchema = leaderSchema.discriminator({});

module.exports = adminSchema;
