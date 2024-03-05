const express = require("express");
const {
  getAllUsers,
  createUser,
  getUserRole,
} = require("../routeHandler/userHandler");

const router = express.Router();

router.get("/", getAllUsers);
router.get("/role/:email", getUserRole);
router.post("/create", createUser);

module.exports = router;
