const mongoose = require('mongoose');
const userSchema = require('../models/userSchema');
const User = new mongoose.model('User', userSchema);

// get all users
const getAllUsers = async (req, res) => {
  try {
    const result = await User.find();
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
};

// create a new user
const createUser = async (req, res) => {
  try {
    const email = req.body.email;
    isExist = await User.findOne({ email: email });
    if (isExist) {
      return res.status(200).json({ message: "User already exists" });
    }
    await User.create(req.body);
    res.status(201).json({ message: "User saved successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {getAllUsers, createUser, User}