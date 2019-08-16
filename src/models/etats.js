/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('etats', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    roues: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    freins: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cadre: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    etatMecanique: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    selle: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    batterie: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'etats'
  });
};
