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

// get single leader by id
const getLeader = async (req, res) => {
  try {
    const leaderId = req.params.leaderId;

    if (!leaderId) {
      return res.status(400).json({ message: "Leader ID is required" });
    }
    const leader = await Leader.findById(leaderId);

    if (!leader) {
      return res.status(404).json({ message: "Leader not found" });
    }
    res.json(leader);
  } catch (error) {
    res.status(500).json({ message: error.message });
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

// update a single leader by id
const updateLeader = async (req, res) => {
  try {
    const leaderId = req.params.leaderId;

    if (!leaderId) {
      return res.status(400).json({ message: "Leader ID is required" });
    }

    const updatedLeader = await Leader.findByIdAndUpdate(leaderId, req.body, {
      new: true,
    });

    if (!updatedLeader) {
      return res.status(404).json({ message: "Leader not found" });
    }

    res.json({ message: "Leader updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete the leader by id
const deleteLeader = async (req, res) => {
  try {
    const leaderId = req.params.id;
    if (!leaderId) {
      return res.status(400).json({ message: "Leader ID is required" });
    }

    const deletedLeader = await Leader.findByIdAndDelete(leaderId);
    if (!deletedLeader) {
      return res.status(404).json({ message: "Leader not found" });
    }

    res.json({ message: "Leader deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllLeaders,
  getLeader,
  createLeader,
  updateLeader,
  deleteLeader,
};
