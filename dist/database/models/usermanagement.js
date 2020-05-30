"use strict";

module.exports = function (sequelize, DataTypes) {
  var usermanagement = sequelize.define('usermanagement', {
    userId: DataTypes.INTEGER,
    managerId: DataTypes.INTEGER
  }, {});

  usermanagement.associate = function (models) {
    usermanagement.belongsTo(models.user, {
      foreignKey: 'userId'
    }, {
      onDelete: 'cascade'
    }, {
      onUpdate: 'cascade'
    });
    usermanagement.belongsTo(models.user, {
      foreignKey: 'managerId'
    }, {
      onDelete: 'cascade'
    }, {
      onUpdate: 'cascade'
    });
  };

  return usermanagement;
};