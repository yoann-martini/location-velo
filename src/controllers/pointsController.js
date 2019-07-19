const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM points', (err, points) => {
      if (err) {
        res.json(err);
      }
      res.render('points', {
        data: points
      });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)

  req.check('longitude').isLength({
    min: 1
  });
  req.check('latitude').isLength({
    min: 1
  });
  const errors = req.validationErrors();
  if (errors) {
    console.log(errors);
    req.flash('error', 'Erreur');
    res.redirect('/admin/points');
  } else {
    req.getConnection((err, connection) => {
      const query = connection.query('INSERT INTO points set ?', data, (err, points) => {
        console.log(points)
        req.flash('success', 'Validé');
        res.redirect('/admin/points');
      })
    })
  }
};

controller.edit = (req, res) => {
  const {
    id
  } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM points WHERE id = ?", [id], (err, rows) => {
      res.render('points_edit', {
        data: rows[0]
      })
    });
  });
};


controller.update = (req, res) => {
  const {
    id
  } = req.params;
  const newPoints = req.body;

  req.check('longitude').isLength({
    min: 1
  });
  req.check('latitude').isLength({
    min: 1
  });
  const errors = req.validationErrors();
  if (errors) {
    console.log(errors);
    req.flash('error', 'Erreur');
  } else {
    req.getConnection((err, conn) => {

      conn.query('UPDATE points set ? where id = ?', [newPoints, id], (err, rows) => {
        req.flash('success', 'Validé');
        res.redirect('/admin/points');
      });
    });
  }
};

controller.delete = (req, res) => {
  const {
    id
  } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM points WHERE id = ?', [id], (err, rows) => {
      res.redirect('/admin/points');
    });
  });
}

module.exports = controller;