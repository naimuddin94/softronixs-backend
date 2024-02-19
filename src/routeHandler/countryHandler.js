const mongoose = require("mongoose");
const countrySchema = require("../models/countrySchema");
const Country = new mongoose.model("Country", countrySchema);

// get all categories
const getAllCountry = async (req, res) => {
  try {
    const result = await Country.find();
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
};

// create a new category
const createCountry = async (req, res) => {
  try {
    await Country.create(req.body);
    res.status(201).json({ message: "Country saved successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllCountry,
  createCountry,
};
