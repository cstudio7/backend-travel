"use strict";

module.exports = function (sequelize, DataTypes) {
  var requesttrip = sequelize.define('requesttrip', {
    userId: DataTypes.INTEGER,
    managerId: DataTypes.INTEGER,
    tripId: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});

  requesttrip.associate = function (models) {
    requesttrip.belongsTo(models.user, {
      foreignKey: 'userId'
    }, {
      onDelete: 'cascade'
    }, {
      onUpdate: 'cascade'
    });
    requesttrip.belongsTo(models.user, {
      foreignKey: 'managerId'
    }, {
      onDelete: 'cascade'
    }, {
      onUpdate: 'cascade'
    });
  };

  return requesttrip;
};