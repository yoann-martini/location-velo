const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('select types.id as type_id, etats.id as etat_id, types.nom, types.description, numSerie, prix from locations inner join types on locations.type_id = types.id inner join etats on locations.etat_id = etats.id',
    (err, locations) => {
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

  req.check("nom").isLength({
    min: 3
  });
  req.check("description");
  const errors = req.validationErrors();
  if (errors) {
    console.log(errors);
    req.flash("error", "Erreur");
    res.redirect("/admin/locations");
  } else {
    req.getConnection((err, connection) => {
      const query = connection.query(
        "INSERT INTO locations set ?",
        data,
        (err, locations) => {
          console.log(locations);
          req.flash("success", "Validé");
          res.redirect("/admin/locations");
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
    conn.query("SELECT * FROM locations WHERE id = ?", [id], (err, rows) => {
      res.render("locations_edit", {
        data: rows[0]
      });
    });
  });
};


controller.update = (req, res) => {


  console.log("truc");
 
  const { id } = req.params;
 
  const newLocation = req.body;

 req.getConnection((err, conn) => {


  conn.query('UPDATE locations set ? where id = ?', [newLocation, id], (err, rows) => {
 
    res.redirect('/admin/locations');
  });
  });
};











/*controller.update = (req, res) => {
  console.log("truc");
  const {
    id
  } = req.params;
  const newLocations = req.body;

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
        "UPDATE locations set ? where id = ?",
        [newLocations, id],
        (err, rows) => {
          req.flash("success", "Validé");
          res.redirect("/admin/locations");
        });
    });
  }
};*/

controller.delete = (req, res) => {
  const {
    id
  } = req.params;
  req.getConnection((err, connection) => {
    connection.query(
      "DELETE FROM locations WHERE id = ?",
      [id],
      (err, rows) => {
        res.redirect("/admin/locations");
      }
    );
  });
};

module.exports = controller;