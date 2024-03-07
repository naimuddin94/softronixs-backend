const firebaseAdmin = require("../firebase/firebase");
const mongoose = require("mongoose");
const userSchema = require("../models/userSchema");
const User = new mongoose.model("User", userSchema);

// get single user by email address
const getUserFn = (dbCollectionName) => async (req, res) => {
  try {
    const email = req.params.email;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    const result = await dbCollectionName.findOne({ email });

    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get all users
const getAllUsersFn = (dbCollectionName) => async (req, res) => {
  try {
    const result = await dbCollectionName.find();
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
};

// create new user
const createUserFn = (dbCollectionName) => async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const displayName = req.body.firstName + " " + req.body.lastName;
  const photoURL = req.body.photo;

  try {
    await firebaseAdmin.auth().createUser({
      email,
      password,
      displayName,
      photoURL,
    });
    await dbCollectionName.create(req.body);
    res.status(201).json({ message: "User saved successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update user
const updateUserFn = (dbCollectionName) => async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }

    // update from user's model
    const user = await dbCollectionName.findById(id);
    const email = user.email;

    const targetUser = await User.findOne({ email });
    targetUser.name = `${req.body.firstName} ${req.body.lastName}`;
    targetUser.save();

    const result = await dbCollectionName.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "Updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get user role
const getUserRoleFn = (dbCollectionName) => async (req, res) => {
  try {
    const email = req.params.email;
    const user = await dbCollectionName.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const role = user.role;
    const name = user.name;
    res.send({ role, name });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// user delete function
const deleteUserFn = (dbCollectionName) => async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }

    const deletedUser = await dbCollectionName.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUserFn,
  getAllUsersFn,
  createUserFn,
  updateUserFn,
  getUserRoleFn,
  deleteUserFn,
};
