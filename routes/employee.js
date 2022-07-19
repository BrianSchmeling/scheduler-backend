const express = require("express");
const router = express.Router();

const employeeController = require("../controllers/employee");

router.get("/", employeeController.index);
router.get("/:name", employeeController.show);
router.post("/add", employeeController.create);
router.put("/:name", employeeController.edit);
router.delete("/:name", employeeController.delete);

module.exports = router;
