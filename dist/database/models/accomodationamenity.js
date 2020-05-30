"use strict";

module.exports = function (sequelize, DataTypes) {
  var accomodationamenity = sequelize.define('accomodationamenity', {
    name: DataTypes.STRING,
    accomodationId: DataTypes.INTEGER
  }, {});

  accomodationamenity.associate = function (models) {
    accomodationamenity.belongsTo(models.accomodation, {
      foreignKey: 'accomodationId'
    }, {
      onDelete: 'cascade'
    }, {
      onUpdate: 'cascade'
    });
  };

  return accomodationamenity;
};