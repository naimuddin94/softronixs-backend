const mongoose = require("mongoose");
const customerSchema = require("../models/customerSchema");
const Customer = new mongoose.model("Customer", customerSchema);

// get all leaders
const getAllCustomers = async (req, res) => {
  try {
    const result = await Customer.find();
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
};

// create a new leader
const createCustomer = async (req, res) => {
  try {
    await Customer.create(req.body);
    res.status(201).json({ message: "Customer saved successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllCustomers, createCustomer };
