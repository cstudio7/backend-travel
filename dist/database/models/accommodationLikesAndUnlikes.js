"use strict";

module.exports = function (sequelize, DataTypes) {
  var accommodationLikesAndUnlikes = sequelize.define('accommodationLikesAndUnlikes', {
    userid: DataTypes.INTEGER,
    accommodationid: DataTypes.INTEGER,
    islike: DataTypes.BOOLEAN
  }, {});

  accommodationLikesAndUnlikes.associate = function () {// associations can be defined here
  };

  return accommodationLikesAndUnlikes;
};