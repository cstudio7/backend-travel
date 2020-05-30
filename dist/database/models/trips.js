"use strict";

module.exports = function (sequelize, DataTypes) {
  var trips = sequelize.define('trips', {
    tripId: DataTypes.INTEGER,
    originId: DataTypes.INTEGER,
    destinationId: DataTypes.INTEGER,
    reason: DataTypes.STRING,
    departureDate: DataTypes.DATE,
    returnDate: DataTypes.DATE,
    accomodationId: DataTypes.INTEGER,
    tripType: DataTypes.STRING,
    leavingDays: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});

  trips.associate = function (models) {
    trips.belongsTo(models.locations, {
      foreignKey: 'originId'
    }, {
      onDelete: 'cascade'
    }, {
      onUpdate: 'cascade'
    });
    trips.belongsTo(models.locations, {
      foreignKey: 'destinationId'
    }, {
      onDelete: 'cascade'
    }, {
      onUpdate: 'cascade'
    });
    trips.belongsTo(models.accomodation, {
      foreignKey: 'accomodationId'
    }, {
      onDelete: 'cascade'
    }, {
      onUpdate: 'cascade'
    });
    trips.belongsTo(models.user, {
      foreignKey: 'userId'
    }, {
      onDelete: 'cascade'
    }, {
      onUpdate: 'cascade'
    });
  };

  return trips;
};