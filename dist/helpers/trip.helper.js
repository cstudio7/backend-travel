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

var _moment = _interopRequireDefault(require("moment"));

var _trip = _interopRequireDefault(require("../services/trip.services"));

var _location = _interopRequireDefault(require("../services/location.services"));

/* eslint-disable array-callback-return */

/**
 * all trip helpers
 */
var tripHelper = /*#__PURE__*/function () {
  function tripHelper() {
    (0, _classCallCheck2["default"])(this, tripHelper);
  }

  (0, _createClass2["default"])(tripHelper, null, [{
    key: "checkLocationExistance",

    /**
     * This method helps to validate if a location
     * exist in database
     * @param {Object} req user request
     * @returns {null} no return
     */
    value: function () {
      var _checkLocationExistance = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Promise.all(req.body.map( /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(trip, index) {
                    var origin, destination;
                    return _regenerator["default"].wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return _location["default"].findLocation(trip.From);

                          case 2:
                            origin = _context.sent;
                            _context.next = 5;
                            return _location["default"].findLocation(trip.To);

                          case 5:
                            destination = _context.sent;

                            if (!origin) {
                              req.errorMessage = "Origin of trip number ".concat(index + 1, " not found");
                              req.errorStatus = 404;
                            } else if (!destination) {
                              req.errorMessage = "Destination of trip number ".concat(index + 1, " not found");
                              req.errorStatus = 404;
                            }

                          case 7:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x2, _x3) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function checkLocationExistance(_x) {
        return _checkLocationExistance.apply(this, arguments);
      }

      return checkLocationExistance;
    }()
    /**
     * This method helps to extract days between two dates
     * it will accept to date and find the days twee them
     * @param {Object} req user request
     * @returns {Object} not return
     */

  }, {
    key: "extractDaysInDate",
    value: function extractDaysInDate(req) {
      var firstTravelDate = '';
      var secondTravelDate = '';
      req.body.map(function (trip, index) {
        req.body[index].leavingDays = 0;

        if (index > 0) {
          firstTravelDate = new Date(req.body[index - 1].departureDate);
          secondTravelDate = new Date(req.body[index].departureDate);
          var DifferenceInTime = secondTravelDate > firstTravelDate ? secondTravelDate.getTime() - firstTravelDate.getTime() : 0;
          var days = DifferenceInTime / (1000 * 3600 * 24);
          req.body[index].leavingDays = days;
        }

        return 0;
      });
      return {
        firstTravelDate: firstTravelDate,
        secondTravelDate: secondTravelDate
      };
    }
    /**
     * This method validate if the trips pattern
     * are consecutive
     * @param {Object} req user request
     * @param {Date} firstTravelDate privious trip date
     * @param {Date} secondTravelDate nexttrip date
     * @returns {null} not return
     */

  }, {
    key: "validateTripPattern",
    value: function validateTripPattern(req, firstTravelDate, secondTravelDate) {
      req.body.map(function (trip, index) {
        if (index > 0 && req.body[index - 1].To !== req.body[index].From) {
          req.errorMessage = "Destination of trip number ".concat(index, ", mush be equal to the Origin of trip number ").concat(index + 1);
          req.errorStatus = 403;
        } else if (index > 0 && firstTravelDate >= secondTravelDate) {
          req.errorMessage = "Departure date of trip number ".concat(index, " can not be greater than Departure date of trip number ").concat(index + 1);
          req.errorStatus = 403;
        }

        return 0;
      });
    }
    /**
     * This method checks if a user request a trip twice
     * @param {Object} req user request
     * @param {Object} res user respnse
     * @returns { null} not return
     */

  }, {
    key: "checkTripExistence",
    value: function () {
      var _checkTripExistence = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return Promise.all(req.body.map( /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(trip, index) {
                    var bookedTrips, trips;
                    return _regenerator["default"].wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            bookedTrips = [];
                            _context3.next = 3;
                            return _trip["default"].findUserTrip(res, req.body[index].From, req.body[index].To);

                          case 3:
                            trips = _context3.sent;
                            trips.filter(function (trip2) {
                              var tripDepartureDate = (0, _moment["default"])(trip2.dataValues.departureDate).format('YYYY-MM-DD');

                              if (tripDepartureDate === trip.departureDate && trip2.userId === req.user.dataValues.id) {
                                req.checker = true;
                              }
                            });
                            if (req.checker) bookedTrips.push(index + 1);
                            req.errorMessage = bookedTrips.length > 0 ? "Trip number ".concat(bookedTrips, " alread exist ") : req.errorMessage;
                            req.errorStatus = bookedTrips.length > 0 ? 409 : req.errorStatus;
                            req.checker = false;

                          case 9:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x6, _x7) {
                    return _ref2.apply(this, arguments);
                  };
                }()));

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function checkTripExistence(_x4, _x5) {
        return _checkTripExistence.apply(this, arguments);
      }

      return checkTripExistence;
    }()
  }]);
  return tripHelper;
}();

var _default = tripHelper;
exports["default"] = _default;