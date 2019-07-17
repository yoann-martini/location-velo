const router = require('express').Router();

const utilisateurController = require('../controllers/utilisateurController');

router.get('/', utilisateurController.list);
router.post('/add', utilisateurController.save);
router.get('/update/:id', utilisateurController.edit);
router.post('/update/:id', utilisateurController.update);
router.get('/delete/:id', utilisateurController.delete);

module.exports = router;

