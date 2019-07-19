const router = require("express").Router();

const etatController = require("../controllers/etatController");

router.get("/", etatController.list);
router.post("/add", etatController.save);
router.get("/update/:id", etatController.edit);
router.post("/update/:id", etatController.update);
router.get("/delete/:id", etatController.delete);

module.exports = router;
