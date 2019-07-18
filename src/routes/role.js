const router = require("express").Router();

const roleController = require("../controllers/roleController");

router.get("/", roleController.list);
router.post("/add", roleController.save);
router.get("/update/:id", roleController.edit);
router.post("/update/:id", roleController.update);
router.get("/delete/:id", roleController.delete);

module.exports = router;
