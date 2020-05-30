"use strict";

module.exports = function (sequelize, DataTypes) {
  var locations = sequelize.define('locations', {
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    longitude: DataTypes.FLOAT,
    latitude: DataTypes.FLOAT
  }, {});

  locations.associate = function (models) {
    locations.hasMany(models.accomodation, {
      foreignKey: 'locationId',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  };

  return locations;
};