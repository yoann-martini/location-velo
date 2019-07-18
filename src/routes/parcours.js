const router = require('express').Router();

const parcoursController = require('../controllers/parcoursController');

router.get('/', parcoursController.list);
router.post('/add', parcoursController.save);
router.get('/update/:id', parcoursController.edit);
router.post('/update/:id',parcoursController.update);
router.get('/delete/:id', parcoursController.delete);

module.exports = router;

