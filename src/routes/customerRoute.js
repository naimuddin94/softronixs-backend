const express = require("express");
const {
  getAllCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../routeHandler/customerHandler");

const router = express.Router();

router.get("/", getAllCustomers);
router.get("/:customerId", getCustomer);
router.post("/create", createCustomer);
router.put("/update/:customerId", updateCustomer);
router.delete("/:id", deleteCustomer);

module.exports = router;
