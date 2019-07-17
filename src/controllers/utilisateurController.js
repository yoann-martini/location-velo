const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
      conn.query('SELECT * FROM utilisateurs', (err, utilisateurs) => {
     if (err) {
      res.json(err);
     }
          res.render('utilisateurs', {
              data: utilisateurs
     });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  
    req.check('nom').not().isEmpty().withMessage('Nom');
    req.check('prenom').isLength({ min: 3 });
    req.check('adresse').isLength({ min: 3 });
    req.check('codePostal').isLength({ min: 3 });
    req.check('genre').isLength({ min: 3 });
    req.check('numCarteIdentite').isLength({ min: 3 });
    req.check('numPermisConduire').isLength({ min: 3 });
    req.check('email').isEmail();
    req.check('mdp').isLength({ min: 3 });
  const errors = req.validationErrors();
  if (errors) {
	console.log(errors);
	req.flash('error', 'Erreur');
	res.redirect('/');
  } else {
	  req.getConnection((err, connection) => {
          const query = connection.query('INSERT INTO utilisateurs set ?', data, (err, utilisateurs) => {
              console.log(utilisateurs)
		  req.flash('success', 'Validé');
		  res.redirect('/');
		})
	  })
  }
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
      conn.query("SELECT * FROM utilisateurs WHERE id = ?", [id], (err, rows) => {
          res.render('utilisateurs_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newUtilisateurs = req.body;
  
    req.check('nom').not().isEmpty().withMessage('Nom');
    req.check('prenom').isLength({ min: 3 });
    req.check('adresse').isLength({ min: 3 });
    req.check('codePostal').isLength({ min: 3 });
    req.check('genre').isLength({ min: 3 });
    req.check('numCarteIdentite').isLength({ min: 3 });
    req.check('numPermisConduire').isLength({ min: 3 });
    req.check('email').isEmail();
    req.check('mdp').isLength({ min: 3 });
  const errors = req.validationErrors();
  if (errors) {
	console.log(errors);
	req.flash('error', 'Erreur');
  } else {
	  req.getConnection((err, conn) => {

          conn.query('UPDATE utilisateurs set ? where id = ?', [newUtilisateurs, id], (err, rows) => {
		req.flash('success', 'Validé');
		res.redirect('/');
	  });
	  });
  }
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
      connection.query('DELETE FROM utilisateurs WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}

module.exports = controller;
