const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
      conn.query('SELECT * FROM parcours', (err, parcours) => {
     if (err) {
      res.json(err);
     }
          res.render('parcours', {
              data: parcours
     });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  
    req.check('nom').not().isEmpty().withMessage('Nom');
    req.check('difficulte').isLength({ min: 1 });
    req.check('categorie').isLength({ min: 3 });
    const errors = req.validationErrors();
  if (errors) {
	console.log(errors);
	req.flash('error', 'Erreur');
	res.redirect('/admin/parcours');
  } else {
	  req.getConnection((err, connection) => {
          const query = connection.query('INSERT INTO parcours set ?', data, (err, parcours) => {
              console.log(parcours)
		  req.flash('success', 'Validé');
		  res.redirect('/admin/parcours');
		})
	  })
  }
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
      conn.query("SELECT * FROM parcours WHERE id = ?", [id], (err, rows) => {
          res.render('parcours_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newParcours = req.body;
  
  req.check('nom').not().isEmpty().withMessage('Nom');
  req.check('difficulte').isLength({ min: 1 });
  req.check('categorie').isLength({ min: 3 });
  const errors = req.validationErrors();
  if (errors) {
	console.log(errors);
	req.flash('error', 'Erreur');
  } else {
	  req.getConnection((err, conn) => {

          conn.query('UPDATE parcours set ? where id = ?', [newParcours, id], (err, rows) => {
		req.flash('success', 'Validé');
		res.redirect('/admin/parcours');
	  });
	  });
  }
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
      connection.query('DELETE FROM parcours WHERE id = ?', [id], (err, rows) => {
      res.redirect('/admin/parcours');
    });
  });
}

module.exports = controller;
