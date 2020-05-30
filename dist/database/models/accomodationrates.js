"use strict";

module.exports = function (sequelize, DataTypes) {
  var accomodationRates = sequelize.define('accomodationRates', {
    userId: DataTypes.INTEGER,
    accommodationId: DataTypes.INTEGER,
    rate: DataTypes.INTEGER
  }, {});

  accomodationRates.associate = function (models) {
    accomodationRates.belongsTo(models.accomodation, {
      foreignKey: 'accommodationId'
    }, {
      onDelete: 'cascade'
    }, {
      onUpdate: 'cascade'
    });
    accomodationRates.belongsTo(models.user, {
      foreignKey: 'userId'
    }, {
      onDelete: 'cascade'
    }, {
      onUpdate: 'cascade'
    });
  };

  return accomodationRates;
};