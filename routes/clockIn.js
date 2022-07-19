const express = require("express");
const router = express.Router();

const clockInController = require("../controllers/clockIn");

router.get("/", clockInController.index);
router.get("/:name", clockInController.show);
router.post("/add", clockInController.create);
router.put("/:name", clockInController.edit);
router.delete("/:name", clockInController.delete);

module.exports = router;
