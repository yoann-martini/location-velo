const router = require('express').Router();

const reservationController = require('../controllers/reservationController');

router.get('/', reservationController.list);
router.post('/add', reservationController.save);
router.get('/update/:id', reservationController.edit);
router.post('/update/:id', reservationController.update);
router.get('/delete/:id', reservationController.delete);

module.exports = router;

