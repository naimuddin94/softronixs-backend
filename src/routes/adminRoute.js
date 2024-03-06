const express = require("express");
const {
  getAllAdmin,
  getAdmin,
  createAdmin,
  updateAdmin,
} = require("../routeHandler/adminHandler");

const router = express.Router();

router.get("/", getAllAdmin);
router.get("/:leaderId", getAdmin);
router.post("/create", createAdmin);
router.put("/update/:leaderId", updateAdmin);

module.exports = router;
