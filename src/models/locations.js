/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('locations', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    etat_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    numSerie: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    prix: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'locations'
  });
};
