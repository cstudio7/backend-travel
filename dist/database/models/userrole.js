"use strict";

module.exports = function (sequelize, DataTypes) {
  var userRole = sequelize.define('userRole', {
    name: DataTypes.STRING
  }, {});
  return userRole;
};