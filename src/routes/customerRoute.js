const express = require("express");
const {
  getAllCustomers,
  createCustomer,
} = require("../routeHandler/customerHandler");

const router = express.Router();

router.get("/", getAllCustomers);
router.post("/create", createCustomer);

module.exports = router;
