const mongoose = require("mongoose");
const leaderSchema = require("../models/leaderSchema");
const Leader = new mongoose.model("Leader", leaderSchema);

// get all leaders
const getAllLeaders = async (req, res) => {
  try {
    const result = await Leader.find();
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
};

// create a new leader
const createLeader = async (req, res) => {
  try {
    await Leader.create(req.body);
    res.status(201).json({ message: "Leader saved successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllLeaders, createLeader };
