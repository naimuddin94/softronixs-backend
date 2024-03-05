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

// get single country by id
const getCountry = async (req, res) => {
  try {
    const countryId = req.params.countryId;

    if (!countryId) {
      return res.status(400).json({ message: "country ID is required" });
    }
    const country = await Country.findById(countryId);

    if (!country) {
      return res.status(404).json({ message: "country not found" });
    }
    res.json(country);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// create a new country
const createCountry = async (req, res) => {
  try {
    await Country.create(req.body);
    res.status(201).json({ message: "Country saved successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update a single country by id
const updateCountry = async (req, res) => {
  console.log(req.body);
  try {
    const countryId = req.params.countryId;

    if (!countryId) {
      return res.status(400).json({ message: "country ID is required" });
    }

    const updatedCountry = await Country.findByIdAndUpdate(
      countryId,
      req.body,
      {
        new: true,
      }
    );

    if (!updatedCountry) {
      return res.status(404).json({ message: "country not found" });
    }

    res.json({ message: "Country updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete the country by id
const deleteCountry = async (req, res) => {
  try {
    const countryId = req.params.id;
    if (!countryId) {
      return res.status(400).json({ message: "Country ID is required" });
    }

    const deletedCountry = await Country.findByIdAndDelete(countryId);
    if (!deletedCountry) {
      return res.status(404).json({ message: "country not found" });
    }

    res.json({ message: "Country deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllCountry,
  getCountry,
  createCountry,
  updateCountry,
  deleteCountry,
};
