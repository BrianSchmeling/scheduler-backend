const express = require("express");
const router = express.Router();

const clockOutController = require("../controllers/clockOut");

router.get("/", clockOutController.index);
router.get("/:name", clockOutController.show);
router.post("/add", clockOutController.create);
router.put("/:name", clockOutController.edit);
router.delete("/:name", clockOutController.delete);

module.exports = router;
