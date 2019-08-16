/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('parcours', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    difficulte: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    categorie: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    duree: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    tableName: 'parcours'
  });
};
