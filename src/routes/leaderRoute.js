const express = require("express");
const {
  getAllLeaders,
  getLeader,
  createLeader,
  updateLeader,
  deleteLeader,
} = require("../routeHandler/leaderHandler");

const router = express.Router();

router.get("/", getAllLeaders);
router.get("/:leaderId", getLeader);
router.post("/create", createLeader);
router.put("/update/:leaderId", updateLeader);
router.delete("/:id", deleteLeader);

module.exports = router;
