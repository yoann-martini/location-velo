/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reservations', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    utilisateur_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    type_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    dateDebut: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dateFin: {
      type: DataTypes.DATE,
      allowNull: false
    },
    caution: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    prixTotal: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    dateRendu: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'reservations'
  });
};
