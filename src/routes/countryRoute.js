const express = require("express");
const {
  getAllCountry,
  getCountry,
  createCountry,
  updateCountry,
  deleteCountry,
} = require("../routeHandler/countryHandler");

const router = express.Router();

router.get("/", getAllCountry);
router.get("/:countryId", getCountry);
router.post("/create", createCountry);
router.put("/update/:countryId", updateCountry);
router.delete("/:id", deleteCountry);

module.exports = router;
