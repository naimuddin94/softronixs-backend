const express = require("express");
const {
  getAllLeaders,
  createLeader,
} = require("../routeHandler/leaderHandler");

const router = express.Router();

router.get("/", getAllLeaders);
router.post("/create", createLeader);

module.exports = router;
