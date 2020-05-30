"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(sequelize, DataTypes) {
  var notification = sequelize.define('notification', {
    receiver: DataTypes.INTEGER,
    requestId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    title: DataTypes.STRING,
    message: DataTypes.STRING,
    read: DataTypes.BOOLEAN
  }, {});

  notification.associate = function (models) {
    notification.belongsTo(models.user, {
      foreignKey: 'receiver',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  };

  return notification;
};

exports["default"] = _default;