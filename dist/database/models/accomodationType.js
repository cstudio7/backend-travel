"use strict";

module.exports = function (sequelize, DataTypes) {
  var accomodationtype = sequelize.define('accomodationtype', {
    name: DataTypes.STRING
  }, {});

  accomodationtype.associate = function (models) {
    accomodationtype.hasMany(models.rooms, {
      foreignKey: 'typeId',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  };

  return accomodationtype;
};