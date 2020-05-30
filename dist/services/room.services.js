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

var _Queries = _interopRequireDefault(require("./Queries"));

var _models = _interopRequireDefault(require("../database/models"));

/** */
var room = /*#__PURE__*/function () {
  function room() {
    (0, _classCallCheck2["default"])(this, room);
  }

  (0, _createClass2["default"])(room, null, [{
    key: "findRoom",

    /**
       * find room status
       * @param { Integer } roomId room id
       * @returns { boolean } true or false
       */
    value: function () {
      var _findRoom = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(roomId) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _Queries["default"].findOneRecord(_models["default"].rooms, {
                  id: roomId
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function findRoom(_x) {
        return _findRoom.apply(this, arguments);
      }

      return findRoom;
    }()
    /**
       * create an accomodation Room
       * @param { Object } newRoom accomodation room
       * @returns {array} data the data to be returned.
       */

  }, {
    key: "createRoom",
    value: function () {
      var _createRoom = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(newRoom) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _models["default"].rooms.bulkCreate(newRoom));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function createRoom(_x2) {
        return _createRoom.apply(this, arguments);
      }

      return createRoom;
    }()
    /**
       * find an accomodation Rooms
       * @param { Integer } accomodationId room accomodationId
       * @returns {array} data the data to be returned.
       */

  }, {
    key: "findRooms",
    value: function () {
      var _findRooms = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(accomodationId) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", _Queries["default"].findAllRecord(_models["default"].rooms, {
                  accomodationId: accomodationId
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function findRooms(_x3) {
        return _findRooms.apply(this, arguments);
      }

      return findRooms;
    }()
    /** Finds all available rooms in accommodation for a particular room type
     *
     * @param {Integer} accommodationId destination  id
     * @param {String} roomTypeId destination  id
     * @returns { Object } list of rooms
     */

  }, {
    key: "getAvalableRoom",
    value: function () {
      var _getAvalableRoom = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(accommodationId, roomTypeId) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", _models["default"].rooms.findOne({
                  where: {
                    accomodationId: accommodationId,
                    typeId: roomTypeId,
                    status: 'available'
                  }
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function getAvalableRoom(_x4, _x5) {
        return _getAvalableRoom.apply(this, arguments);
      }

      return getAvalableRoom;
    }()
  }]);
  return room;
}();

var _default = room;
exports["default"] = _default;