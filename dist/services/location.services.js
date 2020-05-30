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
var location = /*#__PURE__*/function () {
  function location() {
    (0, _classCallCheck2["default"])(this, location);
  }

  (0, _createClass2["default"])(location, null, [{
    key: "findLocation",

    /**
       * find user manager
       * @param { Integer } locationId location id
       * @returns { boolean } true or false
       */
    value: function () {
      var _findLocation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(locationId) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _Queries["default"].findOneRecord(_models["default"].locations, {
                  id: locationId
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function findLocation(_x) {
        return _findLocation.apply(this, arguments);
      }

      return findLocation;
    }()
    /**
       * get most traveled destinations
       * @returns { Object } Locations and travelledTimes
       */

  }, {
    key: "getMostTraveled",
    value: function () {
      var _getMostTraveled = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _models["default"].sequelize.query('SELECT locations.country, locations.city, count (locations.city) as "travelledTimes" FROM trips INNER JOIN locations ON trips."destinationId"=locations.id group by locations.country,locations.city ORDER BY "travelledTimes" DESC;', {
                  type: _models["default"].sequelize.QueryTypes.SELECT
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getMostTraveled() {
        return _getMostTraveled.apply(this, arguments);
      }

      return getMostTraveled;
    }()
    /**
       * get most traveled destinations
       * @returns { Object } Locations and travelledTimes
       */

  }, {
    key: "getLocations",
    value: function () {
      var _getLocations = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var data;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _models["default"].locations.findAll();

              case 2:
                data = _context3.sent;
                return _context3.abrupt("return", data);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getLocations() {
        return _getLocations.apply(this, arguments);
      }

      return getLocations;
    }()
  }]);
  return location;
}();

var _default = location;
exports["default"] = _default;