const express = require("express");
const {
  getAllCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../routeHandler/categoryHandler");

const router = express.Router();

router.get("/", getAllCategories);
router.get("/:categoryId", getCategory);
router.post("/create", createCategory);
router.put("/update/:categoryId", updateCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
