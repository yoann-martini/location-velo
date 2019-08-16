/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('utilisateurs', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    prenom: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    adresse: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    codePostal: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    genre: {
      type: DataTypes.ENUM('Homme','Femme','Autre'),
      allowNull: true
    },
    numCarteIdentite: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    numPermisConduire: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    role_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mdp: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'utilisateurs'
  });
};
