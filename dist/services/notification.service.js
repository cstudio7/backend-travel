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

var _models = _interopRequireDefault(require("../database/models"));

var _emailSender = _interopRequireDefault(require("../helpers/emailSender"));

var _user = _interopRequireDefault(require("./user.service"));

var _socket = require("../helpers/socket.helper");

/**
 * This class contains functions for all notification service.
 * @class NotificationService
 */
var NotificationService = /*#__PURE__*/function () {
  function NotificationService() {
    (0, _classCallCheck2["default"])(this, NotificationService);
  }

  (0, _createClass2["default"])(NotificationService, null, [{
    key: "sendNotification",

    /**
     * Send notification
     * @param { String } event example: `trip_request_event, connect_user, ...`.
     * @param { Number } receiverId User Id.
     * @param { String } title Notification title.
     * @param { String } message Custom message.
     * @param { Number } requestId Request Id.
     * @param { String } redirectLink Link to be sent to email. example: `https://{host}/{requestId}/{token}`.
     * @returns { Promise } Returns a notification query result object.
     */
    value: function () {
      var _sendNotification = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(event, receiverId, title, message, requestId, redirectLink) {
        var data, receiverInfo, result, client;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                data = {
                  receiver: receiverId,
                  requestId: requestId,
                  title: title,
                  message: message
                }; // get receiver data from database

                _context.next = 4;
                return _user["default"].findUser({
                  id: receiverId
                });

              case 4:
                receiverInfo = _context.sent;
                _context.next = 7;
                return _models["default"].notification.create(data);

              case 7:
                result = _context.sent;
                data.id = result.dataValues.id;

                if (receiverInfo.appNotification) {
                  client = _socket.clients.get(receiverInfo.id);

                  if (client) {
                    client.emit(event, data);
                  }
                }

                if (receiverInfo.emailNotification) {
                  _emailSender["default"].sendEmail(receiverInfo.email, title, "<div style=\"display: grid; align-content: center; justify-content: center;\">\n          <div style=\"width: 774px; padding: 48px; margin: 48px; background-color: white;\">\n              <img src=\"https://res.cloudinary.com/dby88h516/image/upload/v1575884218/Group_13_hwi0ze.png\" alt=\"\"/>\n              <div style=\"padding: 18px 0px;\">\n                  <div style=\"width: 678px; font-family: Roboto; font-style: normal; font-weight: normal; font-size: 22px; padding-bottom: 14px; color: rgb(61, 61, 61);\">Hi ".concat(receiverInfo.firstName, ",</div>\n                  <div style=\"width: 678px; font-family: Roboto; font-style: normal; font-weight: normal; font-size: 18px; color: rgb(61, 61, 61);\">").concat(message, "</div>\n              </div>\n              <a target=\"#\" href=\"").concat(redirectLink, "\" style=\"text-decoration: none; cursor: pointer; padding: 8px 40px; font-size: 18px; height: 37px; background-color: #0094FF; box-shadow: 0.2px 0.2px 4px rgba(0, 0, 0, 0.25); color: white;\">View request</a>\n          </div>\n      </div>"));
                }

                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", _context.t0);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 13]]);
      }));

      function sendNotification(_x, _x2, _x3, _x4, _x5, _x6) {
        return _sendNotification.apply(this, arguments);
      }

      return sendNotification;
    }()
    /**
     * get notifications
     * @param { Object } where example: `{ receiver, userId }`.
     * @returns { Promise } Returns a notification query result object.
     */

  }, {
    key: "getNotifications",
    value: function () {
      var _getNotifications = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(where) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _models["default"].notification.findAll({
                  where: where,
                  order: [['read', 'ASC'], ['createdAt', 'DESC']]
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getNotifications(_x7) {
        return _getNotifications.apply(this, arguments);
      }

      return getNotifications;
    }()
    /**
     * get a spesific notification
     * @param { Object } where example: `{ receiver, userId }`.
     * @returns { Promise } Returns a notification query result object.
     */

  }, {
    key: "getNotification",
    value: function () {
      var _getNotification = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(where) {
        var query;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _models["default"].notification.findOne({
                  where: where
                });

              case 2:
                query = _context3.sent;

                if (!query) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return", query);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getNotification(_x8) {
        return _getNotification.apply(this, arguments);
      }

      return getNotification;
    }()
    /**
     * update notifications
     * @param { Object } where example: `{ receiver, userId }`.
     * @param { Object } data example: `{ read: true }`.
     * @returns { Promise } Returns a notification query result object.
     */

  }, {
    key: "updateNotifications",
    value: function () {
      var _updateNotifications = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(where, data) {
        var query;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _models["default"].notification.update(data, {
                  where: where
                });

              case 2:
                query = _context4.sent;
                return _context4.abrupt("return", query);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function updateNotifications(_x9, _x10) {
        return _updateNotifications.apply(this, arguments);
      }

      return updateNotifications;
    }()
  }]);
  return NotificationService;
}();

var _default = NotificationService;
exports["default"] = _default;