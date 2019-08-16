/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('points', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    longitude: {
      type: "DOUBLE",
      allowNull: false
    },
    latitude: {
      type: "DOUBLE",
      allowNull: false
    }
  }, {
    tableName: 'points'
  });
};
