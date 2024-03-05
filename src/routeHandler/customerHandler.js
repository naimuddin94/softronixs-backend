const mongoose = require("mongoose");
const customerSchema = require("../models/customerSchema");
const Customer = new mongoose.model("Customer", customerSchema);
const admin = require("../firebase/firebase");

// get all customers
const getAllCustomers = async (req, res) => {
  try {
    const result = await Customer.find();
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
};

// get single customer by id
const getCustomer = async (req, res) => {
  try {
    const customerId = req.params.customerId;

    if (!customerId) {
      return res.status(400).json({ message: "Customer ID is required" });
    }
    const customer = await Customer.findById(customerId);

    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// create a new Customer
const createCustomer = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const displayName = req.body.firstName + " " + req.body.lastName;
  const photoURL = req.body.photo;

  try {
    await admin.auth().createUser({
      email,
      password,
      displayName,
      photoURL,
    });
    await Customer.create(req.body);
    res.status(201).json({ message: "Customer saved successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update a single Customer by id
const updateCustomer = async (req, res) => {
  try {
    const customerId = req.params.customerId;

    if (!customerId) {
      return res.status(400).json({ message: "Customer ID is required" });
    }

    const updatedCustomer = await Customer.findByIdAndUpdate(
      customerId,
      req.body,
      {
        new: true,
      }
    );

    if (!updatedCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    res.json({ message: "Customer updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete the Customer by id
const deleteCustomer = async (req, res) => {
  try {
    const customerId = req.params.id;
    if (!customerId) {
      return res.status(400).json({ message: "Customer ID is required" });
    }

    const deletedCustomer = await Customer.findByIdAndDelete(customerId);
    if (!deletedCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    res.json({ message: "Customer deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
