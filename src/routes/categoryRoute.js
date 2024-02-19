const express = require("express");
const {
  getAllCategories,
  createCategory,
} = require("../routeHandler/categoryHandler");

const router = express.Router();

router.get("/", getAllCategories);
router.post("/create", createCategory);

module.exports = router;
