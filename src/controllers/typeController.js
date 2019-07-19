const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM types", (err, types) => {
      if (err) {
        res.json(err);
      }
      res.render("types", {
        data: types
      });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body);

  req.check("nom").isLength({
    min: 3
  });
  req.check("description");
  const errors = req.validationErrors();
  if (errors) {
    console.log(errors);
    req.flash("error", "Erreur");
    res.redirect("/admin/type");
  } else {
    req.getConnection((err, connection) => {
      const query = connection.query(
        "INSERT INTO types set ?",
        data,
        (err, types) => {
          console.log(types);
          req.flash("success", "Validé");
          res.redirect("/admin/type");
        }
      );
    });
  }
};

controller.edit = (req, res) => {
  const {
    id
  } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM types WHERE id = ?", [id], (err, rows) => {
      res.render("types_edit", {
        data: rows[0]
      });
    });
  });
};

controller.update = (req, res) => {
  const {
    id
  } = req.params;
  const newTypes = req.body;

  req.check("nom").isLength({
    min: 3
  });
  req.check("description").isLength({
    min: 3
  });
  const errors = req.validationErrors();
  if (errors) {
    console.log(errors);
    req.flash("error", "Erreur");
  } else {
    req.getConnection((err, conn) => {
      conn.query(
        "UPDATE types set ? where id = ?",
        [newTypes, id],
        (err, rows) => {
          req.flash("success", "Validé");
          res.redirect("/admin/type");
        }
      );
    });
  }
};

controller.delete = (req, res) => {
  const {
    id
  } = req.params;
  req.getConnection((err, connection) => {
    connection.query(
      "DELETE FROM types WHERE id = ?",
      [id],
      (err, rows) => {
        res.redirect("/admin/type");
      }
    );
  });
};

module.exports = controller;