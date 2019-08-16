/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('types', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nom: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'types'
  });
};
