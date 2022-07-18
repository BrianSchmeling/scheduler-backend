const express = require("express");
const router = express.Router();

const employeeController = require("../controllers/employee");

router.get("/", employeeController.index);
router.get("/:id", employeeController.show);
router.post("/add", employeeController.create);
router.put("/:id", employeeController.edit);
router.delete("/:name", employeeController.delete);

module.exports = router;
