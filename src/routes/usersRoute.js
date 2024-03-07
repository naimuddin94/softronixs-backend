const express = require("express");
const mongoose = require("mongoose");
const userSchema = require("../models/userSchema");
const User = new mongoose.model("User", userSchema);
const {
  getUserFn,
  getAllUsersFn,
  createUserFn,
  updateUserFn,
  getUserRoleFn,
} = require("../lib/handlerFunctions");

const router = express.Router();

router.get("/", getAllUsersFn(User));
router.get("/:email", getUserFn(User));
router.get("/role/:email", getUserRoleFn(User));
router.post("/create", createUserFn(User));
// router.put("/update/:id", updateUserFn(User));

module.exports = router;
