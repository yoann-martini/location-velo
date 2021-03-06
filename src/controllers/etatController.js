const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("select etats.id, type_id, roues, freins, cadre, etatMecanique, selle, batterie, etats.description, types.nom, types.description from location_velo.etats inner join types on etats.type_id = types.id",
     (err, etats) => {
      if (err) {
        res.json(err);
      }
      res.render("etats", {
        data: etats
      });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body);

  const errors = req.validationErrors();
  if (errors) {
    console.log(errors);
    req.flash("error", "Erreur");
    res.redirect("/admin/etat");
  } else {
    req.getConnection((err, connection) => {
      const query = connection.query(
        "INSERT INTO etats set ?",
        data,
        (err, etats) => {
          console.log(etats);
          req.flash("success", "Validé");
          res.redirect("/admin/etat");
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
    conn.query("SELECT * FROM etats WHERE id = ?", [id], (err, rows) => {
      res.render("etats_edit", {
        data: rows[0]
      });
    });
  });
};

controller.update = (req, res) => {
  const {
    id
  } = req.params;
  const newetats = req.body;

  const errors = req.validationErrors();
  if (errors) {
    console.log(errors);
    req.flash("error", "Erreur");
  } else {
    req.getConnection((err, conn) => {
      conn.query(
        "UPDATE etats set ? where id = ?",
        [newetats, id],
        (err, rows) => {
          req.flash("success", "Validé");
          res.redirect("/admin/etat");
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
      "DELETE FROM etats WHERE id = ?",
      [id],
      (err, rows) => {
        res.redirect("/admin/etat");
      }
    );
  });
};

module.exports = controller;