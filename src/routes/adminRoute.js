const express = require("express");
const mongoose = require("mongoose");
const adminSchema = require("../models/adminSchema");
const Admin = new mongoose.model("Admin", adminSchema);
const {
  getUserFn,
  getAllUsersFn,
  createUserFn,
  updateUserFn,
} = require("../lib/handlerFunctions");

const router = express.Router();

router.get("/", getAllUsersFn(Admin));
router.get("/:email", getUserFn(Admin));
router.post("/create", createUserFn(Admin));
router.put("/update/:id", updateUserFn(Admin));

module.exports = router;
