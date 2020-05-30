"use strict";

module.exports = function (sequelize, DataTypes) {
  var accomodationservice = sequelize.define('accomodationservice', {
    name: DataTypes.STRING,
    accomodationId: DataTypes.INTEGER
  }, {});

  accomodationservice.associate = function (models) {
    accomodationservice.belongsTo(models.accomodation, {
      foreignKey: 'accomodationId'
    }, {
      onDelete: 'cascade'
    }, {
      onUpdate: 'cascade'
    });
  };

  return accomodationservice;
};