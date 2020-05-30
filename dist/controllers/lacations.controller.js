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

var _location = _interopRequireDefault(require("../services/location.services"));

var _response = _interopRequireDefault(require("../helpers/response.helper"));

/**
 * This class contains functions for locations controller.
 * @class NotificationController
 */
var LocationsController = /*#__PURE__*/function () {
  function LocationsController() {
    (0, _classCallCheck2["default"])(this, LocationsController);
  }

  (0, _createClass2["default"])(LocationsController, null, [{
    key: "getMostTraveledLocations",

    /**
     * Get most traveled locations
     * @param {Object} req The request object
     * @param {Object} res The response object
     * @returns {Object} res
     */
    value: function () {
      var _getMostTraveledLocations = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var query;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _location["default"].getMostTraveled();

              case 2:
                query = _context.sent;
                return _context.abrupt("return", _response["default"].successMessage(res, 'Most traveled locations', 200, query));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getMostTraveledLocations(_x, _x2) {
        return _getMostTraveledLocations.apply(this, arguments);
      }

      return getMostTraveledLocations;
    }()
    /**
     * Get supported locations
     * @param {Object} req The request object
     * @param {Object} res The response object
     * @returns {Object} res
     */

  }, {
    key: "getSupportedLocations",
    value: function () {
      var _getSupportedLocations = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var locations, data;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _location["default"].getLocations();

              case 2:
                locations = _context2.sent;
                data = locations.map(function (location) {
                  var country = location.country,
                      city = location.city,
                      id = location.id;
                  return {
                    country: country,
                    city: city,
                    id: id
                  };
                });
                return _context2.abrupt("return", _response["default"].successMessage(res, 'all supported locations', 200, data));

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getSupportedLocations(_x3, _x4) {
        return _getSupportedLocations.apply(this, arguments);
      }

      return getSupportedLocations;
    }()
  }]);
  return LocationsController;
}();

var _default = LocationsController;
exports["default"] = _default;