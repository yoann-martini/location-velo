const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM roles", (err, role) => {
      if (err) {
        res.json(err);
      }
      res.render("roles", {
        data: role
      });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;   
  console.log(req.body);

  req.check("nom").isLength({ min: 3 });
  const errors = req.validationErrors();
  if (errors) {
    console.log(errors);
    req.flash("error", "Erreur");
    res.redirect("/admin/role");
  } else {
    req.getConnection((err, connection) => {
      const query = connection.query(
        "INSERT INTO roles set ?",
        data,
          (err, role) => {
          console.log(role);
          req.flash("success", "Validé");
          res.redirect("/admin/role");
        }
      );
    });
  }
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM roles WHERE id = ?", [id], (err, rows) => {
      res.render("roles_edit", {
        data: rows[0]
      });
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newRoles = req.body;

  req.check("nom").isLength({ min: 3 });
  const errors = req.validationErrors();
  if (errors) {
    console.log(errors);
    req.flash("error", "Erreur");
  } else {
    req.getConnection((err, conn) => {
      conn.query(
        "UPDATE roles set ? where id = ?",
        [newRoles, id],
        (err, rows) =>  {
          req.flash("success", "Validé"); 
          res.redirect("/admin/role");
        }
      );
    });
  }
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query(
      "DELETE FROM roles WHERE id = ?",
      [id],
      (err, rows) => {
        res.redirect("/admin/role");
      }
    );
  });
};

module.exports = controller;
