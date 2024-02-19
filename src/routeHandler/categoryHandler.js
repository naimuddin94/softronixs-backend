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

// get single category by id
const getCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;

    if (!categoryId) {
      return res.status(400).json({ message: "Category ID is required" });
    }
    const category = await Category.findById(categoryId);

    if (!category) {
      return res.status(404).json({ message: "category not found" });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// create a new category
const createCategory = async (req, res) => {
  console.log("log from 17", req.body);
  try {
    await Category.create(req.body);
    res.status(201).json({ message: "Category saved successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update a single category by id
const updateCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;

    if (!categoryId) {
      return res.status(400).json({ message: "Category ID is required" });
    }

    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      req.body,
      {
        new: true,
      }
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: "category not found" });
    }

    res.json({ message: "category updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete the category by id
const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    if (!categoryId) {
      return res.status(400).json({ message: "Category ID is required" });
    }

    const deletedCategory = await Category.findByIdAndDelete(categoryId);
    if (!deletedCategory) {
      return res.status(404).json({ message: "category not found" });
    }

    res.json({ message: "category deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllCategories,
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
};
