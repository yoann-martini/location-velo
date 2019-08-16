/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('parcours_points', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    ref: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    parcours: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    point_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    pause: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'parcours_points'
  });
};
