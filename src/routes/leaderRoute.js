const express = require("express");
const mongoose = require("mongoose");
const leaderSchema = require("../models/leaderSchema");
const Leader = new mongoose.model("Leader", leaderSchema);
const {
  getUserFn,
  getAllUsersFn,
  createUserFn,
  updateUserFn,
  deleteUserFn,
} = require("../lib/handlerFunctions");

const router = express.Router();

router.get("/", getAllUsersFn(Leader));
router.get("/:email", getUserFn(Leader));
router.post("/create", createUserFn(Leader));
router.put("/update/:id", updateUserFn(Leader));
router.delete("/:id", deleteUserFn(Leader));

module.exports = router;
