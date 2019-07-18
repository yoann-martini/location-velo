const router = require('express').Router();

const pointsController = require('../controllers/pointsController');

router.get('/', pointsController.list);
router.post('/add', pointsController.save);
router.get('/update/:id', pointsController.edit);
router.post('/update/:id',pointsController.update);
router.get('/delete/:id', pointsController.delete);

module.exports = router;

