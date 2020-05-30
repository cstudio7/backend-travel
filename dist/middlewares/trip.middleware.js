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

var _response = _interopRequireDefault(require("../helpers/response.helper"));

var _trip = _interopRequireDefault(require("../services/trip.services"));

var _trip2 = _interopRequireDefault(require("../helpers/trip.helper"));

var _joi = _interopRequireDefault(require("../helpers/joi.validate"));

var _accomodation = _interopRequireDefault(require("../helpers/accomodation.helper"));

var _models = _interopRequireDefault(require("../database/models"));

/**
* Class for users to create trips
*/
var TripMiddleware = /*#__PURE__*/function () {
  function TripMiddleware() {
    (0, _classCallCheck2["default"])(this, TripMiddleware);
  }

  (0, _createClass2["default"])(TripMiddleware, null, [{
    key: "checkTripExist",

    /**
     * this functions checks if the trip requested is already created
     * @param {Object} req req
     * @param {Object} res res
     * @param {Object} next ment
     * @returns {Object} returned
     */
    value: function () {
      var _checkTripExist = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
        var bodyData, departureDate, userId, trip, foundTrip, requestUser;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                bodyData = Object.prototype.toString.call(req.body);

                if (!(bodyData === '[object Array]')) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", next());

              case 3:
                departureDate = req.body.departureDate;
                userId = req.user.id;
                _context.next = 7;
                return _trip["default"].findTrip(userId);

              case 7:
                trip = _context.sent;
                foundTrip = trip.filter(function (trips) {
                  return departureDate === (0, _moment["default"])(trips.departureDate).format('YYYY-MM-DD');
                });

                if (!(trip.length === 0 || foundTrip.length === 0)) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt("return", next());

              case 11:
                _context.next = 13;
                return _trip["default"].findRequestByID(_models["default"].requesttrip, {
                  tripId: foundTrip[0].tripId
                });

              case 13:
                requestUser = _context.sent;

                if (!requestUser[0]) {
                  _context.next = 16;
                  break;
                }

                return _context.abrupt("return", _response["default"].errorMessage(res, 'this trip has been already created', 409));

              case 16:
                return _context.abrupt("return", next());

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function checkTripExist(_x, _x2, _x3) {
        return _checkTripExist.apply(this, arguments);
      }

      return checkTripExist;
    }()
    /** checks if the date is valid if the travel date is not later in the future than the return date
     * @param {Object} req request
     * @param {Object} res response
     * @param {Object} next jumps to the next middleware on the chain
     * @returns {Object} object
     */

  }, {
    key: "checkIfDateisValid",
    value: function () {
      var _checkIfDateisValid = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
        var _req$body, departureDate, returnDate, type, bodyData, travel, returDate;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _req$body = req.body, departureDate = _req$body.departureDate, returnDate = _req$body.returnDate, type = _req$body.type;
                bodyData = Object.prototype.toString.call(req.body);

                if (!(bodyData === '[object Array]' || type !== 'round trip')) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return", next());

              case 4:
                travel = new Date(departureDate);
                returDate = new Date(returnDate);

                if (!(travel > returDate)) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt("return", _response["default"].errorMessage(res, 'the departure date cannot be later than the return date', 400));

              case 8:
                return _context2.abrupt("return", next());

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function checkIfDateisValid(_x4, _x5, _x6) {
        return _checkIfDateisValid.apply(this, arguments);
      }

      return checkIfDateisValid;
    }()
    /** check if the locations are stored in the database
     *  check if the origin is not the same as the destination
     *  @param {req} req it contains the request of the user
     *  @param {res} res it contains the response the user receive
     *  @param {function} next it jumps to the next middleware in the route
     *  @return {object} the data from the first middleware
     */

  }, {
    key: "checkLocations",
    value: function () {
      var _checkLocations = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
        var bodyData, _req$body2, From, To, findPlace;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                bodyData = Object.prototype.toString.call(req.body);

                if (!(bodyData === '[object Array]')) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return", next());

              case 3:
                _req$body2 = req.body, From = _req$body2.From, To = _req$body2.To;
                _context3.next = 6;
                return _trip["default"].findSupportedPlaces(From, To);

              case 6:
                findPlace = _context3.sent;

                if (!(From === To)) {
                  _context3.next = 9;
                  break;
                }

                return _context3.abrupt("return", _response["default"].errorMessage(res, 'you cannot create  that trip', 403));

              case 9:
                if (!(findPlace.origin === null)) {
                  _context3.next = 11;
                  break;
                }

                return _context3.abrupt("return", _response["default"].errorMessage(res, 'barefoot nomad does not have an office in that origin', 404));

              case 11:
                if (!(findPlace.destination === null)) {
                  _context3.next = 13;
                  break;
                }

                return _context3.abrupt("return", _response["default"].errorMessage(res, 'barefoot nomad does not have an office in your destination', 404));

              case 13:
                next();

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function checkLocations(_x7, _x8, _x9) {
        return _checkLocations.apply(this, arguments);
      }

      return checkLocations;
    }()
    /**
     * validate multcities inputed by user
     * @param {Object} req user request
     * @param {Object} res user response
     * @param {Object} next next to the middleware chain
     * @returns { Object} return user response
     */

  }, {
    key: "multiCityDataValidation",
    value: function () {
      var _multiCityDataValidation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
        var bodyData;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                bodyData = Object.prototype.toString.call(req.body);

                if (!(bodyData !== '[object Array]')) {
                  _context5.next = 3;
                  break;
                }

                return _context5.abrupt("return", next());

              case 3:
                if (req.body.length <= 1) {
                  req.errorMessage = 'Multi city can not go below two cities kindly use one way or round trip';
                  req.errorStatus = 401;
                }

                _context5.next = 6;
                return Promise.all(req.body.map( /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(trip, index) {
                    var _multyCity$validate, error, _tripHelper$extractDa, firstTravelDate, secondTravelDate;

                    return _regenerator["default"].wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            _multyCity$validate = _joi["default"].validate(trip), error = _multyCity$validate.error;

                            if (!error) {
                              _context4.next = 6;
                              break;
                            }

                            req.errorMessage = "".concat(error.details[0].message, " kindly check trip number ").concat(index + 1);
                            req.errorStatus = 401;
                            _context4.next = 15;
                            break;

                          case 6:
                            _context4.next = 8;
                            return _accomodation["default"].checkAccomodationAvailability(req);

                          case 8:
                            _context4.next = 10;
                            return _trip2["default"].checkLocationExistance(req);

                          case 10:
                            _tripHelper$extractDa = _trip2["default"].extractDaysInDate(req), firstTravelDate = _tripHelper$extractDa.firstTravelDate, secondTravelDate = _tripHelper$extractDa.secondTravelDate;

                            _trip2["default"].validateTripPattern(req, firstTravelDate, secondTravelDate);

                            if (!(req.route.stack[0].method !== 'patch')) {
                              _context4.next = 15;
                              break;
                            }

                            _context4.next = 15;
                            return _trip2["default"].checkTripExistence(req, res);

                          case 15:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4);
                  }));

                  return function (_x13, _x14) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 6:
                if (!req.errorMessage) {
                  _context5.next = 8;
                  break;
                }

                return _context5.abrupt("return", _response["default"].errorMessage(res, req.errorMessage, req.errorStatus, 'error'));

              case 8:
                return _context5.abrupt("return", next());

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function multiCityDataValidation(_x10, _x11, _x12) {
        return _multiCityDataValidation.apply(this, arguments);
      }

      return multiCityDataValidation;
    }()
    /**
     * this function is used to check status of the trip so that it can be edited
     * @param {Object} req user request
     * @param {Object} res user response
     * @param {Object} next next to the middleware chain
     * @returns { Object} return user response
     */

  }, {
    key: "checkTripRequestStatus",
    value: function () {
      var _checkTripRequestStatus = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res, next) {
        var tripId, tripRequest, status;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                tripId = req.params.tripId;
                _context6.next = 3;
                return _trip["default"].getTripRequestByTripId(tripId);

              case 3:
                tripRequest = _context6.sent;
                status = tripRequest[0].status;

                if (!(status === 'approved')) {
                  _context6.next = 7;
                  break;
                }

                return _context6.abrupt("return", _response["default"].errorMessage(res, 'trip request is closed,you can not edit it. ', 401));

              case 7:
                req.tripRequest = tripRequest;
                return _context6.abrupt("return", next());

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function checkTripRequestStatus(_x15, _x16, _x17) {
        return _checkTripRequestStatus.apply(this, arguments);
      }

      return checkTripRequestStatus;
    }()
  }]);
  return TripMiddleware;
}();

var _default = TripMiddleware;
exports["default"] = _default;