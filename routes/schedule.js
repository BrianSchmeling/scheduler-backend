const express = require("express");
const router = express.Router();

const scheduleController = require("../controllers/schedule");

router.get("/", scheduleController.index);
router.get("/:id", scheduleController.show);
router.post("/add", scheduleController.create);
router.put("/:id", scheduleController.edit);
router.delete("/:id", scheduleController.delete);

module.exports = router;
