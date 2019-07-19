const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM reservations', (err, reservations) => {
      if (err) {
        res.json(err);
      }
      res.render('reservations', {
        data: reservations
      });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)

  req.check('locataire').not().isEmpty().withMessage('Locataire');
  req.check('vehiculeLoue');
  req.check('dateDebut');
  req.check('dateFin');
  req.check('caution');
  req.check('prixTotal');
  req.check('dateRendu');
  const errors = req.validationErrors();
  if (errors) {
    console.log(errors);
    req.flash('error', 'Erreur');
    res.redirect('/admin/reservation');
  } else {
    req.getConnection((err, connection) => {
      const query = connection.query('INSERT INTO reservations set ?', data, (err, reservations) => {
        console.log(reservations)
        req.flash('success', 'Validé');
        res.redirect('/admin/reservation');
      })
    })
  }
};

controller.edit = (req, res) => {
  const {
    id
  } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM reservations WHERE id = ?", [id], (err, rows) => {
      res.render('reservations_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const {
    id
  } = req.params;
  const newReservations = req.body;

  req.check('locataire').not().isEmpty().withMessage('Locataire');
  req.check('vehiculeLoue');
  req.check('dateDebut');
  req.check('dateFin');
  req.check('caution');
  req.check('prixTotal');
  req.check('dateRendu');
  const errors = req.validationErrors();
  if (errors) {
    console.log(errors);
    req.flash('error', 'Erreur');
  } else {
    req.getConnection((err, conn) => {

      conn.query('UPDATE reservations set ? where id = ?', [newReservations, id], (err, rows) => {
        req.flash('success', 'Validé');
        res.redirect('/admin/reservation');
      });
    });
  }
};

controller.delete = (req, res) => {
  const {
    id
  } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM reservations WHERE id = ?', [id], (err, rows) => {
      res.redirect('/admin/reservation');
    });
  });
}

module.exports = controller;