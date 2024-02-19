const express = require("express");
const {
  getAllCountry,
  createCountry,
} = require("../routeHandler/countryHandler");

const router = express.Router();

router.get("/", getAllCountry);
router.post("/create", createCountry);

module.exports = router;
