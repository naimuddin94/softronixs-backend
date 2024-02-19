const mongoose = require("mongoose");
const categorySchema = require("../models/categorySchema");
const Category = new mongoose.model("Category", categorySchema);

// get all categories
const getAllCategories = async (req, res) => {
  try {
    const result = await Category.find();
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
};

// create a new category
const createCategory = async (req, res) => {
  console.log(req.body);
  try {
    await Category.create(req.body);
    res.status(201).json({ message: "Category saved successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllCategories,
  createCategory,
};
