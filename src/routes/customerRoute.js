const express = require("express");
const mongoose = require("mongoose");
const customerSchema = require("../models/customerSchema");
const Customer = new mongoose.model("Leader", customerSchema);

const {
  getUserFn,
  getAllUsersFn,
  createUserFn,
  updateUserFn,
  deleteUserFn,
} = require("../lib/handlerFunctions");

const router = express.Router();

router.get("/", getAllUsersFn(Customer));
router.get("/:email", getUserFn(Customer));
router.post("/create", createUserFn(Customer));
router.put("/update/:id", updateUserFn(Customer));
router.delete("/:id", deleteUserFn(Customer));

module.exports = router;
