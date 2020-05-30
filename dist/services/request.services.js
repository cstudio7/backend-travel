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

/** class to implement request service functionalities
 *
 */
var TripRequestService = /*#__PURE__*/function () {
  function TripRequestService() {
    (0, _classCallCheck2["default"])(this, TripRequestService);
  }

  (0, _createClass2["default"])(TripRequestService, null, [{
    key: "getTripRequestData",

    /** function that gets a pending trip request from the parameter
     * @param {integer} requestId id of the request from the params
     * @returns {object} the found trip request
     */
    value: function () {
      var _getTripRequestData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(requestId) {
        var requestFound;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _Queries["default"].getTripRequestData(_models["default"].requesttrip, requestId);

              case 2:
                requestFound = _context.sent;
                return _context.abrupt("return", requestFound);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getTripRequestData(_x) {
        return _getTripRequestData.apply(this, arguments);
      }

      return getTripRequestData;
    }()
    /** Function to update the status to approved or reject
     *
     * @param {string} status status to replacing the current one
     * @param {integer} requestId request id to be found and then replace the status
     * @returns {object} updated data
     */

  }, {
    key: "updateTripRequestStatus",
    value: function () {
      var _updateTripRequestStatus = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(status, requestId) {
        var updatedRequest;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                updatedRequest = _Queries["default"].updateTripRequestStatus(_models["default"].requesttrip, status, requestId);
                return _context2.abrupt("return", updatedRequest);

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function updateTripRequestStatus(_x2, _x3) {
        return _updateTripRequestStatus.apply(this, arguments);
      }

      return updateTripRequestStatus;
    }()
    /** Function to search according to what the user is typing
     * @param {integer} id the id of the logged in user
     * @param {string} queryString the query passed in the query params
     * @param {integer} limit the limit of the data retrieved
     * @param {integer} offset the offset to know how to divide pages
     * @returns {object} found data
     */

  }, {
    key: "search",
    value: function () {
      var _search = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id, queryString, limit, offset) {
        var foundRecords;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                foundRecords = _models["default"].sequelize.query("SELECT users.\"firstName\", users.\"lastName\", lo.city as origin, lc.city as destination, trips.\"departureDate\", trips.\"returnDate\", ac.name, req.status\n        FROM users inner join trips on users.id = trips.\"userId\" inner join locations lo on lo.id = trips.\"originId\" inner join locations lc on lc.id = trips.\"destinationId\" \n        inner join accomodation ac on ac.id = trips.\"accomodationId\" inner join requesttrips req on req.\"tripId\" = trips.\"tripId\"\n        WHERE (users.\"firstName\" ilike '%".concat(queryString, "%' or users.\"lastName\" ilike '%").concat(queryString, "%' or lo.city ilike '%").concat(queryString, "%' or lc.city ilike '%").concat(queryString, "%' or ac.name ilike '%").concat(queryString, "%' or req.status ilike '%").concat(queryString, "%'\n        or CAST(trips.\"departureDate\" AS  varchar) like '%").concat(queryString, "%' or cast(trips.\"returnDate\" as varchar) like '%").concat(queryString, "%') and (req.\"userId\"= ").concat(id, " or req.\"managerId\" = ").concat(id, ") ORDER BY trips.\"createdAt\" DESC limit ").concat(limit, " offset ").concat(offset), {
                  type: _models["default"].sequelize.QueryTypes.SELECT
                });
                return _context3.abrupt("return", foundRecords);

              case 5:
                _context3.prev = 5;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", _context3.t0.message);

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 5]]);
      }));

      function search(_x4, _x5, _x6, _x7) {
        return _search.apply(this, arguments);
      }

      return search;
    }()
    /**
     * This method will be user to delete the selected trip in multi city
    * a trip data in database
     * @param { integer } tripId trip id as integer
     * @param {Object} tripType type of trip
     * @returns { Object } response data
     */

  }, {
    key: "deleteMultiCityTripRequestByTripId",
    value: function () {
      var _deleteMultiCityTripRequestByTripId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(tripId) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", _Queries["default"].deleteMultiCityTripRequestByTripId(_models["default"].trips, tripId));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function deleteMultiCityTripRequestByTripId(_x8) {
        return _deleteMultiCityTripRequestByTripId.apply(this, arguments);
      }

      return deleteMultiCityTripRequestByTripId;
    }()
    /**
      * find trip services
      * @param {Object} tripId trip id
      * @returns { Object} user response
      */

  }, {
    key: "getTripRequestByTripId",
    value: function () {
      var _getTripRequestByTripId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(tripId) {
        var trip;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _Queries["default"].getTripRequestByTripId(_models["default"].trips, tripId);

              case 3:
                trip = _context5.sent;

                if (trip) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt("return", false);

              case 6:
                return _context5.abrupt("return", trip);

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](0);
                return _context5.abrupt("return", _context5.t0);

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 9]]);
      }));

      function getTripRequestByTripId(_x9) {
        return _getTripRequestByTripId.apply(this, arguments);
      }

      return getTripRequestByTripId;
    }()
    /** Function to update the status to approved or reject
     *
     * @param {string} id the id of the selected trip
     * @returns {object} updated data
     */

  }, {
    key: "updateTripRequestStatusById",
    value: function () {
      var _updateTripRequestStatusById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(id) {
        var updatedRequest;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                updatedRequest = _Queries["default"].updateTripRequestStatusById(_models["default"].requesttrip, id);
                return _context6.abrupt("return", updatedRequest);

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function updateTripRequestStatusById(_x10) {
        return _updateTripRequestStatusById.apply(this, arguments);
      }

      return updateTripRequestStatusById;
    }()
    /** Function to update the status to approved or reject
     *
     * @param {Object} requests requests
     * @param {Object} manager manager
     * @returns {object} data
     */

  }, {
    key: "getTripRequestsOfUser",
    value: function () {
      var _getTripRequestsOfUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(requests, manager) {
        var requestTrips;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                requestTrips = [];
                _context8.next = 3;
                return Promise.all(requests.rows.map( /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(request) {
                    var booking, trips;
                    return _regenerator["default"].wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            _context7.next = 2;
                            return _models["default"].sequelize.query("SELECT a.name as accomodation, b.checkoutdate, b.departuredate, trips.\"tripType\", b.roomid, t.name\n      FROM trips\n      INNER JOIN accomodation a ON a.id=trips.\"accomodationId\"\n      INNER JOIN bookings b ON b.accommodationid=trips.\"accomodationId\"\n      INNER JOIN rooms r ON r.id=b.roomid\n      INNER JOIN accomodationtypes t ON t.id=r.\"typeId\"\n      WHERE trips.\"tripId\"='".concat(request.tripId, "'\n      LIMIT 1;"), {
                              type: _models["default"].sequelize.QueryTypes.SELECT
                            });

                          case 2:
                            booking = _context7.sent;
                            _context7.next = 5;
                            return _models["default"].sequelize.query("\n        SELECT trips.id, o.city as origin, d.city as destination, a.name as accomodation, trips.\"departureDate\", trips.\"returnDate\", trips.\"tripType\", trips.\"createdAt\"\n        FROM trips\n        INNER JOIN locations o ON o.id=trips.\"originId\"\n        INNER JOIN locations d ON d.id=trips.\"destinationId\"\n        INNER JOIN accomodation a ON a.id=trips.\"accomodationId\"\n        WHERE trips.\"tripId\"='".concat(request.tripId, "';\n      "), {
                              type: _models["default"].sequelize.QueryTypes.SELECT
                            });

                          case 5:
                            trips = _context7.sent;
                            requestTrips.push(trips.map(function (trip) {
                              return {
                                id: request.id,
                                origin: trip.origin,
                                destination: trip.destination,
                                tripId: request.tripId,
                                tripTripId: trip.id,
                                tripType: trip.tripType,
                                status: request.status,
                                accomodation: trip.accomodation,
                                departureDate: trip.departureDate,
                                returnDate: trip.returnDate,
                                createdAt: trip.createdAt,
                                manager: {
                                  firstName: manager.firstName,
                                  lastName: manager.lastName
                                },
                                booking: booking
                              };
                            }));

                          case 7:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _callee7);
                  }));

                  return function (_x13) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 3:
                return _context8.abrupt("return", {
                  count: requests.count,
                  requestTrips: requestTrips
                });

              case 4:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function getTripRequestsOfUser(_x11, _x12) {
        return _getTripRequestsOfUser.apply(this, arguments);
      }

      return getTripRequestsOfUser;
    }()
  }]);
  return TripRequestService;
}();

var _default = TripRequestService;
exports["default"] = _default;