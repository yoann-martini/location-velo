const router = require("express").Router();

const locationController = require("../controllers/locationController");

router.get("/", locationController.list);
router.post("/add", locationController.save);
router.get("/update/:id", locationController.edit);
router.post("/update/:id", locationController.update);
router.get("delete/:id", locationController.delete);

module.exports = router;
