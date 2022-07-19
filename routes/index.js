const express = require("express");
const router = express.Router();

router.use("/schedule", require("./schedule"));
router.use("/employee", require("./employee"));
router.use("/clockIn", require("./clockIn"));
router.use("clockOut", require("./clockOut"));

module.exports = router;
