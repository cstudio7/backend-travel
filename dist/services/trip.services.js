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

/** trip service */
var TripService = /*#__PURE__*/function () {
  function TripService() {
    (0, _classCallCheck2["default"])(this, TripService);
  }

  (0, _createClass2["default"])(TripService, null, [{
    key: "CreateTripRequest",

    /**
        * creating user query
        * @param {string} tripsRequest users table in database.
        * @returns {array} data the data to be returned.
        */
    value: function () {
      var _CreateTripRequest = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(tripsRequest) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _Queries["default"].create(_models["default"].requesttrip, tripsRequest));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function CreateTripRequest(_x) {
        return _CreateTripRequest.apply(this, arguments);
      }

      return CreateTripRequest;
    }()
    /**
      * creating trip query
      * @param {object} req users table in database.
      * @param {Object} body it gets the data from req.body
      * @param {long} tripId it will specify which type of trip(round, one-way, multi-city)
      * @param {String} tripType it will specify which type of trip(round, one-way, multi-city)
      * @returns {array} data that was created
      */

  }, {
    key: "CreateTrip",
    value: function () {
      var _CreateTrip = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, body, tripId, tripType) {
        var data;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                data = {
                  reasons: body.reasons,
                  originId: body.From,
                  destinationId: body.To,
                  accomodationId: body.accomodationId,
                  departureDate: body.departureDate,
                  returnDate: '' || body.returnDate,
                  userId: req.user.id,
                  tripId: tripId,
                  tripType: tripType
                };
                return _context2.abrupt("return", _Queries["default"].create(_models["default"].trips, data));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function CreateTrip(_x2, _x3, _x4, _x5) {
        return _CreateTrip.apply(this, arguments);
      }

      return CreateTrip;
    }()
    /** Finds all bookings of a single user
    * @param {String} table table name
     * @param {integer} tripId
     * @returns {array} the bookings that was found
     */

  }, {
    key: "findRequestByID",
    value: function () {
      var _findRequestByID = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(table, tripId) {
        var requestedTrip;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _Queries["default"].findAllRecord(table, tripId);

              case 3:
                requestedTrip = _context3.sent;
                return _context3.abrupt("return", requestedTrip);

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", _context3.t0);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }));

      function findRequestByID(_x6, _x7) {
        return _findRequestByID.apply(this, arguments);
      }

      return findRequestByID;
    }()
    /**
     * This method will provide a service of inserting
     * a trip data in database
     * @param {Object} req request from user
     * @param {Object} body data posted by user
     * @param { integer } tripId trip id as integer
     * @param {Object} tripType type of trip
     * @returns { Object } response data
     */

  }, {
    key: "CreateMultiCityTrip",
    value: function () {
      var _CreateMultiCityTrip = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, body, tripId, tripType) {
        var data;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                data = {
                  tripId: tripId,
                  originId: body.From,
                  reason: body.reason,
                  destinationId: body.To,
                  departureDate: body.departureDate,
                  accomodationId: body.accomodationId,
                  tripType: tripType,
                  leavingDays: body.leavingDays,
                  userId: req.user.id
                };
                return _context4.abrupt("return", _Queries["default"].create(_models["default"].trips, data));

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function CreateMultiCityTrip(_x8, _x9, _x10, _x11) {
        return _CreateMultiCityTrip.apply(this, arguments);
      }

      return CreateMultiCityTrip;
    }()
    /**
      * searching a trip
      * @param {date} travelDate the travel date in database.
      * @param {integer} userId user id in database.
      * @returns {array} data the data to be returned.
      */

  }, {
    key: "findBooking",
    value: function () {
      var _findBooking = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(travelDate, userId) {
        var booking;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _Queries["default"].findBooking(_models["default"].bookings, travelDate, userId);

              case 3:
                booking = _context5.sent;
                return _context5.abrupt("return", booking);

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](0);
                return _context5.abrupt("return", _context5.t0);

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 7]]);
      }));

      function findBooking(_x12, _x13) {
        return _findBooking.apply(this, arguments);
      }

      return findBooking;
    }()
    /** Searchs for trip by the origin and destination of the trip
     * @param {integer} userId the origin
     * @param {integer} travelDate the destination
     * @returns {array} trip that was found
     */

  }, {
    key: "findTrip",
    value: function () {
      var _findTrip = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(userId) {
        var trip;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _Queries["default"].findTrip(_models["default"].trips, userId);

              case 3:
                trip = _context6.sent;
                return _context6.abrupt("return", trip);

              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6["catch"](0);
                return _context6.abrupt("return", _context6.t0);

              case 10:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 7]]);
      }));

      function findTrip(_x14) {
        return _findTrip.apply(this, arguments);
      }

      return findTrip;
    }()
    /**
     *
     * @param {Integer} userId the id of the user
     * @returns {Object} the booking of the exact passed user id
     */

  }, {
    key: "findBookingByUser",
    value: function () {
      var _findBookingByUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(userId) {
        var bookUser;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return _Queries["default"].findAccommodation(_models["default"].trips, userId);

              case 3:
                bookUser = _context7.sent;
                return _context7.abrupt("return", bookUser);

              case 7:
                _context7.prev = 7;
                _context7.t0 = _context7["catch"](0);
                return _context7.abrupt("return", _context7.t0);

              case 10:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 7]]);
      }));

      function findBookingByUser(_x15) {
        return _findBookingByUser.apply(this, arguments);
      }

      return findBookingByUser;
    }()
    /**
      * This method will provide a service of inserting
      * a trip request in database
      * @param {Object} data posted by user
      * @returns { Object } response data
      */

  }, {
    key: "CreateMultiCityTripRequest",
    value: function () {
      var _CreateMultiCityTripRequest = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(data) {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", _Queries["default"].create(_models["default"].requesttrip, data));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function CreateMultiCityTripRequest(_x16) {
        return _CreateMultiCityTripRequest.apply(this, arguments);
      }

      return CreateMultiCityTripRequest;
    }()
    /**
      * searching a trip
      * @param {integer} userId user id in database.
      * @returns {array} data the data to be returned.
      */

  }, {
    key: "findUserRequest",
    value: function () {
      var _findUserRequest = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(userId) {
        var request;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return _Queries["default"].findAllRecord(_models["default"].requesttrips, {
                  userId: userId
                });

              case 3:
                request = _context9.sent;

                if (!request.dataValues) {
                  _context9.next = 6;
                  break;
                }

                return _context9.abrupt("return", request);

              case 6:
                _context9.next = 11;
                break;

              case 8:
                _context9.prev = 8;
                _context9.t0 = _context9["catch"](0);
                return _context9.abrupt("return", _context9.t0);

              case 11:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, null, [[0, 8]]);
      }));

      function findUserRequest(_x17) {
        return _findUserRequest.apply(this, arguments);
      }

      return findUserRequest;
    }()
    /**
      * searching a trip that is created by a given user in a given period of time
      * @param {object} userId id of the user who created trips.
      * @param {object} searchDate date to get the trips that was created since this date.
      * @returns {array} data the data to be returned.
      */

  }, {
    key: "findTripsCreatedByuser",
    value: function () {
      var _findTripsCreatedByuser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(userId, searchDate) {
        var foundTrips;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                _context10.next = 3;
                return _models["default"].sequelize.query("SELECT trips.\"tripType\", count(DISTINCT trips.\"tripId\") from trips where trips.\"userId\" = ".concat(userId, " and trips.\"createdAt\"<='").concat(searchDate, "' GROUP BY trips.\"tripType\""), {
                  type: _models["default"].sequelize.QueryTypes.SELECT
                });

              case 3:
                foundTrips = _context10.sent;
                return _context10.abrupt("return", foundTrips);

              case 7:
                _context10.prev = 7;
                _context10.t0 = _context10["catch"](0);
                return _context10.abrupt("return", _context10.t0);

              case 10:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, null, [[0, 7]]);
      }));

      function findTripsCreatedByuser(_x18, _x19) {
        return _findTripsCreatedByuser.apply(this, arguments);
      }

      return findTripsCreatedByuser;
    }()
    /**
     *
     * @param {Integer} userId the id of the user
     * @returns {Object} the booking of the exact passed user id
     */

  }, {
    key: "findUserManager",
    value: function () {
      var _findUserManager = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(userId) {
        var trip;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.prev = 0;
                _context11.next = 3;
                return _Queries["default"].findTrip(_models["default"].usermanagement, userId);

              case 3:
                trip = _context11.sent;
                return _context11.abrupt("return", trip);

              case 7:
                _context11.prev = 7;
                _context11.t0 = _context11["catch"](0);
                return _context11.abrupt("return", _context11.t0);

              case 10:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, null, [[0, 7]]);
      }));

      function findUserManager(_x20) {
        return _findUserManager.apply(this, arguments);
      }

      return findUserManager;
    }()
    /**
      * find trip services
      * @param {Object} res user response
      * @param {Object} from from origin
      * @param {Object} to user response
      * @returns { Object} user response
      */

  }, {
    key: "findUserTrip",
    value: function () {
      var _findUserTrip = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(res, from, to) {
        var trip;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.prev = 0;
                _context12.next = 3;
                return _Queries["default"].findUserTrip(_models["default"].trips, from, to);

              case 3:
                trip = _context12.sent;

                if (trip) {
                  _context12.next = 6;
                  break;
                }

                return _context12.abrupt("return", false);

              case 6:
                return _context12.abrupt("return", trip);

              case 9:
                _context12.prev = 9;
                _context12.t0 = _context12["catch"](0);
                return _context12.abrupt("return", _context12.t0);

              case 12:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, null, [[0, 9]]);
      }));

      function findUserTrip(_x21, _x22, _x23) {
        return _findUserTrip.apply(this, arguments);
      }

      return findUserTrip;
    }()
    /**
      * searching a trip
      * @param {string} from the supported places in database.
      * @param {string} to the supported places in database.
      * @returns {array} data the data to be returned.
      */

  }, {
    key: "findSupportedPlaces",
    value: function () {
      var _findSupportedPlaces = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(from, to) {
        var place;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.prev = 0;
                _context13.next = 3;
                return _Queries["default"].findPlace(_models["default"].locations, from, to);

              case 3:
                place = _context13.sent;
                return _context13.abrupt("return", place);

              case 7:
                _context13.prev = 7;
                _context13.t0 = _context13["catch"](0);
                return _context13.abrupt("return", _context13.t0);

              case 10:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, null, [[0, 7]]);
      }));

      function findSupportedPlaces(_x24, _x25) {
        return _findSupportedPlaces.apply(this, arguments);
      }

      return findSupportedPlaces;
    }()
    /**
      * find trip services
      * @param {Object} tripId trip id
      * @returns { Object} user response
      */

  }, {
    key: "getTripByTripId",
    value: function () {
      var _getTripByTripId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(tripId) {
        var trip;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.prev = 0;
                _context14.next = 3;
                return _Queries["default"].getTripByTripId(_models["default"].trips, tripId);

              case 3:
                trip = _context14.sent;

                if (trip) {
                  _context14.next = 6;
                  break;
                }

                return _context14.abrupt("return", false);

              case 6:
                return _context14.abrupt("return", trip);

              case 9:
                _context14.prev = 9;
                _context14.t0 = _context14["catch"](0);
                return _context14.abrupt("return", _context14.t0);

              case 12:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, null, [[0, 9]]);
      }));

      function getTripByTripId(_x26) {
        return _getTripByTripId.apply(this, arguments);
      }

      return getTripByTripId;
    }()
    /**
     *
     * @param {Integer} userId the id of the user
     * @param {Object} limit which includes
     * @param {Object} offset number
     * @returns {Object} the booking of the exact passed user id
     */

  }, {
    key: "findTripRequestsById",
    value: function () {
      var _findTripRequestsById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(userId, limit, offset) {
        var bookUser;
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.prev = 0;
                _context15.next = 3;
                return _Queries["default"].paginationSearch(_models["default"].requesttrip, {
                  userId: userId
                }, limit, offset);

              case 3:
                bookUser = _context15.sent;
                return _context15.abrupt("return", bookUser);

              case 7:
                _context15.prev = 7;
                _context15.t0 = _context15["catch"](0);
                return _context15.abrupt("return", _context15.t0);

              case 10:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, null, [[0, 7]]);
      }));

      function findTripRequestsById(_x27, _x28, _x29) {
        return _findTripRequestsById.apply(this, arguments);
      }

      return findTripRequestsById;
    }()
    /**
     *
     * @param {Integer} managerId the id of the user
     * @param {Object} limit which includes
     * @param {Object} offset number
     * @returns {Object} the booking of the exact passed user id
     */

  }, {
    key: "findTripRequestsByManagerID",
    value: function () {
      var _findTripRequestsByManagerID = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(managerId, limit, offset) {
        var tripRequests;
        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.prev = 0;
                _context16.next = 3;
                return _Queries["default"].paginationSearch(_models["default"].requesttrip, {
                  managerId: managerId
                }, limit, offset);

              case 3:
                tripRequests = _context16.sent;
                return _context16.abrupt("return", tripRequests);

              case 7:
                _context16.prev = 7;
                _context16.t0 = _context16["catch"](0);
                return _context16.abrupt("return", _context16.t0);

              case 10:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, null, [[0, 7]]);
      }));

      function findTripRequestsByManagerID(_x30, _x31, _x32) {
        return _findTripRequestsByManagerID.apply(this, arguments);
      }

      return findTripRequestsByManagerID;
    }()
    /**
     * This method search trip reqest by trip id
     * @param { Integer } tripID the tripID
     * @returns { Object } trip request data
     */

  }, {
    key: "searchTripRequestByTripId",
    value: function () {
      var _searchTripRequestByTripId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(tripID) {
        var tripRequest;
        return _regenerator["default"].wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return _Queries["default"].findOneRecord(_models["default"].requesttrip, {
                  tripId: tripID
                });

              case 2:
                tripRequest = _context17.sent;

                if (!(tripRequest !== 0)) {
                  _context17.next = 5;
                  break;
                }

                return _context17.abrupt("return", tripRequest);

              case 5:
                return _context17.abrupt("return", null);

              case 6:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17);
      }));

      function searchTripRequestByTripId(_x33) {
        return _searchTripRequestByTripId.apply(this, arguments);
      }

      return searchTripRequestByTripId;
    }()
    /**
     * This service get a spacific trip request data
     * @param {Object} tripId tripID
     * @returns {Object} user response
     */

  }, {
    key: "getTripRequest",
    value: function () {
      var _getTripRequest = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(tripId) {
        var trips, tripRequest;
        return _regenerator["default"].wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.next = 2;
                return _Queries["default"].findAllRecord(_models["default"].trips, {
                  tripId: tripId
                });

              case 2:
                trips = _context18.sent;
                _context18.next = 5;
                return _Queries["default"].findOneRecord(_models["default"].requesttrip, {
                  tripId: tripId
                });

              case 5:
                tripRequest = _context18.sent;

                if (!tripRequest) {
                  _context18.next = 8;
                  break;
                }

                return _context18.abrupt("return", {
                  tripRequest: tripRequest,
                  trips: trips
                });

              case 8:
                return _context18.abrupt("return", false);

              case 9:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18);
      }));

      function getTripRequest(_x34) {
        return _getTripRequest.apply(this, arguments);
      }

      return getTripRequest;
    }()
    /**
      * find trip services
      * @param {Object} tripId trip id
      * @returns { Object} user response
      */

  }, {
    key: "getTripRequestByTripId",
    value: function () {
      var _getTripRequestByTripId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19(tripId) {
        var trip;
        return _regenerator["default"].wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _context19.prev = 0;
                _context19.next = 3;
                return _Queries["default"].getTripByTripId(_models["default"].requesttrip, tripId);

              case 3:
                trip = _context19.sent;

                if (trip) {
                  _context19.next = 6;
                  break;
                }

                return _context19.abrupt("return", false);

              case 6:
                return _context19.abrupt("return", trip);

              case 9:
                _context19.prev = 9;
                _context19.t0 = _context19["catch"](0);
                return _context19.abrupt("return", _context19.t0);

              case 12:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, null, [[0, 9]]);
      }));

      function getTripRequestByTripId(_x35) {
        return _getTripRequestByTripId.apply(this, arguments);
      }

      return getTripRequestByTripId;
    }()
    /** Function to update the trip which has the status of approved or reject
     *
     * @param {string} tripId the id of the selected trip
     * @param {Object} body it gets the data from req.body
     * @returns {object} updated data
     */

  }, {
    key: "updateTrip",
    value: function () {
      var _updateTrip = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20(tripId, body) {
        var data, updatedRequest;
        return _regenerator["default"].wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                data = {
                  reason: body.reason,
                  originId: body.From,
                  destinationId: body.To,
                  accomodationId: body.accomodationId,
                  departureDate: body.departureDate,
                  returnDate: '' || body.returnDate,
                  tripType: body.type
                };
                updatedRequest = _Queries["default"].updateTrip(_models["default"].trips, tripId, data);
                return _context20.abrupt("return", updatedRequest);

              case 3:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20);
      }));

      function updateTrip(_x36, _x37) {
        return _updateTrip.apply(this, arguments);
      }

      return updateTrip;
    }()
  }]);
  return TripService;
}();

var _default = TripService;
exports["default"] = _default;