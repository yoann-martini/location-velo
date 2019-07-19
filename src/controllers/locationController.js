const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM locations', (err, locations) => {
      if (err) {
        res.json(err);
      }
      res.render("locations", {
        data: locations
      });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body);

  req.check("nom").isLength({ min: 3 });
  req.check("description");
  const errors = req.validationErrors();
  if (errors) {
    console.log(errors);
    req.flash("error", "Erreur");
    res.redirect("/admin/location");
  } else {
    req.getConnection((err, connection) => {
      const query = connection.query(
        "INSERT INTO locations set ?",
        data,
        (err, locations) => {
          console.log(locations);
          req.flash("success", "Validé");
          res.redirect("/admin/location");
        }
      );
    });
  }
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM locations WHERE id = ?", [id], (err, rows) => {
      res.render("locations_edit", {
        data: rows[0]
      });
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newlocations = req.body;

  req.check("nom").isLength({ min: 3 });
  req.check("description").isLength({ min: 3 });
  const errors = req.validationErrors();
  if (errors) {
    console.log(errors);
    req.flash("error", "Erreur");
  } else {
    req.getConnection((err, conn) => {
      conn.query(
        "UPDATE locations set ? where id = ?",
        [newlocations, id],
        (err, rows) => {
          req.flash("success", "Validé");
          res.redirect("/admin/location");
        }
      );
    });
  }
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query(
      "DELETE FROM locations WHERE id = ?",
      [id],
      (err, rows) => {
        res.redirect("/admin/location");
      }
    );
  });
};

module.exports = controller;
