"use strict";

module.exports = function (sequelize, DataTypes) {
  var image = sequelize.define('image', {
    recordId: DataTypes.INTEGER,
    imageType: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  }, {});
  return image;
};