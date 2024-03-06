const mongoose = require("mongoose");
const adminSchema = require("../models/adminSchema");
const Admin = new mongoose.model("Admin", adminSchema);
const firebaseAdmin = require("../firebase/firebase");

// get all admin
const getAllAdmin = async (req, res) => {
  try {
    const result = await Admin.find();
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
};

// get single admin by id
const getAdmin = async (req, res) => {
  try {
    const adminId = req.params.adminId;

    if (!adminId) {
      return res.status(400).json({ message: "Admin ID is required" });
    }
    const admin = await Admin.findById(adminId);

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    res.json(admin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// create a new admin
const createAdmin = async (req, res) => {
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
    await Admin.create(req.body);
    res.status(201).json({ message: "Admin saved successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update a single Admin by id
const updateAdmin = async (req, res) => {
  try {
    const adminId = req.params.adminId;

    if (!adminId) {
      return res.status(400).json({ message: "Admin ID is required" });
    }

    const updatedAdmin = await Admin.findByIdAndUpdate(adminId, req.body, {
      new: true,
    });

    if (!updatedAdmin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.json({ message: "Admin updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllAdmin,
  getAdmin,
  createAdmin,
  updateAdmin,
};
