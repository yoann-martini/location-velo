const router = require("express").Router();

const typeController = require("../controllers/typeController");

router.get("/", typeController.list);
router.post("/add", typeController.save);
router.get("/update/:id", typeController.edit);
router.post("/update/:id", typeController.update);
router.get("/delete/:id", typeController.delete);

module.exports = router;
