"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _dotenv = require("dotenv");

var _socket = require("../helpers/socket.helper");

var _user = _interopRequireDefault(require("../services/user.service"));

var _chat = _interopRequireDefault(require("../services/chat.service"));

var _response = _interopRequireDefault(require("../helpers/response.helper"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

(0, _dotenv.config)();
/** Function to list all users
    * @returns {*} data returned
*/

var ChatController = /*#__PURE__*/function () {
  function ChatController() {
    (0, _classCallCheck2["default"])(this, ChatController);
  }

  (0, _createClass2["default"])(ChatController, null, [{
    key: "getAllUsers",

    /** Function to list all users
      * @param {object} req the request sent
      * @param {object} res the response returned
      * @returns {*} data returned
      */
    value: function () {
      var _getAllUsers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var newArray, allUsers;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                newArray = [];
                _context.next = 4;
                return _user["default"].getAllUsers();

              case 4:
                allUsers = _context.sent;
                allUsers.forEach(function (user) {
                  var u = {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    image: user.profileImage
                  };

                  var client = _socket.clients.get(user.id);

                  if (client) {
                    newArray.push(_objectSpread(_objectSpread({}, u), {}, {
                      isOnline: true
                    }));
                  } else {
                    newArray.push(_objectSpread(_objectSpread({}, u), {}, {
                      isOnline: false
                    }));
                  }
                });
                return _context.abrupt("return", _response["default"].successMessage(res, 'users available', 200, newArray.sort(function (a, b) {
                  return a.isOnline.toString().localeCompare(b.isOnline.toString());
                }).reverse()));

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", _context.t0.message);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }));

      function getAllUsers(_x, _x2) {
        return _getAllUsers.apply(this, arguments);
      }

      return getAllUsers;
    }()
    /** Get Private and public message between two users
      * @param {object} req the request sent
      * @param {object} res the response returned
      * @returns {*} data returned
      */

  }, {
    key: "getMessages",
    value: function () {
      var _getMessages = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var userId, id, publicMessages, privateMessages;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                userId = req.params.userId;
                id = req.user.id;

                if (userId) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 6;
                return _chat["default"].getPublicMessage();

              case 6:
                publicMessages = _context2.sent;
                return _context2.abrupt("return", _response["default"].successMessage(res, 'Messages', 200, publicMessages));

              case 8:
                _context2.next = 10;
                return _chat["default"].getPrivateMessage(userId, id);

              case 10:
                privateMessages = _context2.sent;
                return _context2.abrupt("return", _response["default"].successMessage(res, 'Messages', 200, privateMessages));

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", _response["default"].errorMessage(res, _context2.t0.message, 500));

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 14]]);
      }));

      function getMessages(_x3, _x4) {
        return _getMessages.apply(this, arguments);
      }

      return getMessages;
    }()
  }]);
  return ChatController;
}();

var _default = ChatController;
exports["default"] = _default;