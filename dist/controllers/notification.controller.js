"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _notification = _interopRequireDefault(require("../services/notification.service"));

var _user = _interopRequireDefault(require("../services/user.service"));

var _response = _interopRequireDefault(require("../helpers/response.helper"));

/**
 * This class contains functions for all notification controller.
 * @class NotificationController
 */
var NotificationController = /*#__PURE__*/function () {
  function NotificationController() {
    (0, _classCallCheck2["default"])(this, NotificationController);
  }

  (0, _createClass2["default"])(NotificationController, null, [{
    key: "getUserNotifications",

    /**
     * Get notification for a user
     * @param {Object} req The request object
     * @param {Object} res The response object
     * @returns {Promise} res
     */
    value: function () {
      var _getUserNotifications = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var query;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _notification["default"].getNotifications({
                  receiver: req.user.id
                });

              case 2:
                query = _context.sent;
                return _context.abrupt("return", _response["default"].successMessage(res, "".concat(req.user.firstName, "'s notifications"), 200, query));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getUserNotifications(_x, _x2) {
        return _getUserNotifications.apply(this, arguments);
      }

      return getUserNotifications;
    }()
    /**
     * View a spesific notification
     * @param {Object} req The request object
     * @param {Object} res The response object
     * @returns {Promise} res
     */

  }, {
    key: "getNotificationById",
    value: function () {
      var _getNotificationById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var query;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _notification["default"].getNotification({
                  id: req.params.id,
                  receiver: req.user.id
                });

              case 2:
                query = _context2.sent;
                return _context2.abrupt("return", _response["default"].successMessage(res, 'A spesific notification', 200, query));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getNotificationById(_x3, _x4) {
        return _getNotificationById.apply(this, arguments);
      }

      return getNotificationById;
    }()
    /**
     * Change user preference for email and in app notification
     * @param {Object} req The request object
     * @param {Object} res The response object
     * @returns {Promise} res
     */

  }, {
    key: "changePreference",
    value: function () {
      var _changePreference = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var _req$body, emailNotification, appNotification;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _req$body = req.body, emailNotification = _req$body.emailNotification, appNotification = _req$body.appNotification;
                _context3.next = 3;
                return _user["default"].updateUser(req.user.email, {
                  appNotification: appNotification,
                  emailNotification: emailNotification
                });

              case 3:
                return _context3.abrupt("return", _response["default"].successMessage(res, 'Successfully update user preference.', 200));

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function changePreference(_x5, _x6) {
        return _changePreference.apply(this, arguments);
      }

      return changePreference;
    }()
    /**
     * Update all notifications as read
     * @param {Object} req The request object
     * @param {Object} res The response object
     * @returns {Promise} res
     */

  }, {
    key: "updateNotificationsStatus",
    value: function () {
      var _updateNotificationsStatus = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _notification["default"].updateNotifications({
                  receiver: req.user.id,
                  read: false
                }, {
                  read: true
                });

              case 2:
                return _context4.abrupt("return", _response["default"].successMessage(res, 'Successfully marked all notifications as read.', 200));

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function updateNotificationsStatus(_x7, _x8) {
        return _updateNotificationsStatus.apply(this, arguments);
      }

      return updateNotificationsStatus;
    }()
    /**
     * Update a notification as read
     * @param {Object} req The request object
     * @param {Object} res The response object
     * @returns {Promise} res
     */

  }, {
    key: "updateNotificationStatus",
    value: function () {
      var _updateNotificationStatus = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _notification["default"].updateNotifications({
                  id: req.params.notificationID,
                  receiver: req.user.id
                }, {
                  read: req.body.isRead
                });

              case 2:
                return _context5.abrupt("return", _response["default"].successMessage(res, 'Successfully marked a notification as read.', 200));

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function updateNotificationStatus(_x9, _x10) {
        return _updateNotificationStatus.apply(this, arguments);
      }

      return updateNotificationStatus;
    }()
  }]);
  return NotificationController;
}();

var _default = NotificationController;
exports["default"] = _default;