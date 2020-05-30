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

var _Queries = _interopRequireDefault(require("./Queries"));

/**
 * This class contains all chat functionality
 * @class ChatService
 */
var ChatService = /*#__PURE__*/function () {
  function ChatService() {
    (0, _classCallCheck2["default"])(this, ChatService);
  }

  (0, _createClass2["default"])(ChatService, null, [{
    key: "saveMessage",

    /**
     * save Chat Message
     * @param { Object } chatData
     * @returns { Promise } Returns a a saved message.
     */
    value: function () {
      var _saveMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(chatData) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                return _context.abrupt("return", _Queries["default"].create(_models["default"].chats, chatData));

              case 4:
                _context.prev = 4;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", _context.t0);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 4]]);
      }));

      function saveMessage(_x) {
        return _saveMessage.apply(this, arguments);
      }

      return saveMessage;
    }()
    /**
     * get Private Message
     * @param { Integer } sender .
     * @param { Integer } receiver .
     * @returns { Promise } Returns a list of messages
     */

  }, {
    key: "getPrivateMessage",
    value: function () {
      var _getPrivateMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(sender, receiver) {
        var privateMessages;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                privateMessages = _Queries["default"].getPrivateMessage(_models["default"].chats, sender, receiver);
                return _context2.abrupt("return", privateMessages);

              case 5:
                _context2.prev = 5;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", _context2.t0);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 5]]);
      }));

      function getPrivateMessage(_x2, _x3) {
        return _getPrivateMessage.apply(this, arguments);
      }

      return getPrivateMessage;
    }()
    /**
     * get Public Message
     * @returns { Promise } Returns a list of Public messages
     */

  }, {
    key: "getPublicMessage",
    value: function () {
      var _getPublicMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var condition, publicMessages;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                condition = {
                  receiverId: null
                };
                publicMessages = _Queries["default"].findAllRecord(_models["default"].chats, condition);
                return _context3.abrupt("return", publicMessages);

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", _context3.t0);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 6]]);
      }));

      function getPublicMessage() {
        return _getPublicMessage.apply(this, arguments);
      }

      return getPublicMessage;
    }()
  }]);
  return ChatService;
}();

var _default = ChatService;
exports["default"] = _default;