"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _sequelize = require("sequelize");

var _models = _interopRequireDefault(require("../database/models"));

/**
 * class for responses
 */
var Queries = /*#__PURE__*/function () {
  function Queries() {
    (0, _classCallCheck2["default"])(this, Queries);
  }

  (0, _createClass2["default"])(Queries, null, [{
    key: "create",

    /**
    * creating user query
    * @param {string} table users table in database.
    * @param {string} data the data to be inputed in database.
    * @returns {array} data the data to be returned.
    */
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(table, data) {
        var datas;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return table.create(data);

              case 3:
                datas = _context.sent;
                return _context.abrupt("return", datas);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", _context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function create(_x, _x2) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
    /**
     * searching a trip
     * @param {string} table users table in database.
     * @param {date} travelDate the travel date in database.
     * @param {integer} userId user id in database.
     * @returns {array} data the data to be returned.
     */

  }, {
    key: "findBooking",
    value: function () {
      var _findBooking = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(table, travelDate, userId) {
        var data;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return table.findAll({
                  where: (0, _defineProperty2["default"])({}, _sequelize.Op.and, [{
                    travelDate: (0, _defineProperty2["default"])({}, _sequelize.Op.eq, travelDate)
                  }, {
                    userId: (0, _defineProperty2["default"])({}, _sequelize.Op.eq, userId)
                  }])
                });

              case 2:
                data = _context2.sent;
                return _context2.abrupt("return", data);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function findBooking(_x3, _x4, _x5) {
        return _findBooking.apply(this, arguments);
      }

      return findBooking;
    }()
    /** finds a trip where originId and destinationId are found
     *
     * @param {object} table the table to search from
     * @param {integer} userId the origin location
     * @returns {array} data that was found
     */

  }, {
    key: "findTrip",
    value: function () {
      var _findTrip = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(table, userId) {
        var data;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return table.findAll({
                  where: (0, _defineProperty2["default"])({}, _sequelize.Op.and, [{
                    userId: (0, _defineProperty2["default"])({}, _sequelize.Op.eq, userId)
                  }])
                });

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

      function findTrip(_x6, _x7) {
        return _findTrip.apply(this, arguments);
      }

      return findTrip;
    }()
    /**
     *
     * @param {object} table the table to search from
     * @param {integer} userId the origin location
     * @returns {array} data that was found
     */

  }, {
    key: "findUserManagement",
    value: function () {
      var _findUserManagement = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(table, userId) {
        var data;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return table.findAll({
                  where: (0, _defineProperty2["default"])({}, _sequelize.Op.and, [{
                    userId: (0, _defineProperty2["default"])({}, _sequelize.Op.eq, userId)
                  }])
                });

              case 2:
                data = _context4.sent;
                return _context4.abrupt("return", data);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function findUserManagement(_x8, _x9) {
        return _findUserManagement.apply(this, arguments);
      }

      return findUserManagement;
    }()
    /**
      * searching a trip
      * @param {string} table users table in database.
      * @param {string} from the supported places in database.
      * @param {string} to the supported places in database.
      * @returns {array} data the data to be returned.
      */

  }, {
    key: "findPlace",
    value: function () {
      var _findPlace = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(table, from, to) {
        var origin, destination, locations;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return table.findOne({
                  where: {
                    id: from
                  }
                });

              case 3:
                origin = _context5.sent;
                _context5.next = 6;
                return table.findOne({
                  where: {
                    id: to
                  }
                });

              case 6:
                destination = _context5.sent;
                locations = {
                  origin: origin,
                  destination: destination
                };
                return _context5.abrupt("return", locations);

              case 11:
                _context5.prev = 11;
                _context5.t0 = _context5["catch"](0);
                return _context5.abrupt("return", _context5.t0);

              case 14:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 11]]);
      }));

      function findPlace(_x10, _x11, _x12) {
        return _findPlace.apply(this, arguments);
      }

      return findPlace;
    }()
    /**
      * searching a trip
      * @param {string} table table users table in database.
      * @param {integer} userId requestUserId user id in database.
      * @returns {array} data the data to be returned.
      */

  }, {
    key: "findAllRecord",
    value: function () {
      var _findAllRecord = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(table, userId) {
        var data;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return table.findAll({
                  where: userId
                });

              case 2:
                data = _context6.sent;
                return _context6.abrupt("return", data);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function findAllRecord(_x13, _x14) {
        return _findAllRecord.apply(this, arguments);
      }

      return findAllRecord;
    }()
    /**
     * find trip function
     * @param {String} table table name
     * @param {integer} from city id
     * @param {integer} to destination city id
     * @param { date } departuredate departure date
     * @returns { Object } result
     */

  }, {
    key: "findUserTrip",
    value: function () {
      var _findUserTrip = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(table, from, to) {
        var data;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return table.findAll({
                  where: {
                    originId: from,
                    destinationId: to
                  }
                });

              case 2:
                data = _context7.sent;
                return _context7.abrupt("return", data);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function findUserTrip(_x15, _x16, _x17) {
        return _findUserTrip.apply(this, arguments);
      }

      return findUserTrip;
    }()
    /** Query to find a room by id
     *
     * @param {*} table table to find from
     * @param {*} accomodationId id of the room
     * @return {*} room found
     */

  }, {
    key: "findRoom",
    value: function () {
      var _findRoom = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(table, accomodationId) {
        var requestedRoom;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return table.findAll({
                  where: (0, _defineProperty2["default"])({}, _sequelize.Op.and, [{
                    id: (0, _defineProperty2["default"])({}, _sequelize.Op.eq, accomodationId)
                  }, {
                    status: 'available'
                  }])
                });

              case 3:
                requestedRoom = _context8.sent;
                return _context8.abrupt("return", requestedRoom);

              case 7:
                _context8.prev = 7;
                _context8.t0 = _context8["catch"](0);
                return _context8.abrupt("return", _context8.t0);

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[0, 7]]);
      }));

      function findRoom(_x18, _x19) {
        return _findRoom.apply(this, arguments);
      }

      return findRoom;
    }()
    /**
     * find user manager
     * @param {String} table database table
     * @param {integer} user user id
     * @returns {integer} manager id
     */

  }, {
    key: "findManagerByUserId",
    value: function () {
      var _findManagerByUserId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(table, user) {
        var data;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return table.findOne({
                  where: {
                    userId: user
                  }
                });

              case 2:
                data = _context9.sent;

                if (!data) {
                  _context9.next = 5;
                  break;
                }

                return _context9.abrupt("return", data.dataValues.managerId);

              case 5:
                return _context9.abrupt("return", false);

              case 6:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function findManagerByUserId(_x20, _x21) {
        return _findManagerByUserId.apply(this, arguments);
      }

      return findManagerByUserId;
    }()
    /**
    * find location
    * @param { String } table location database table
    * @param { Object } value attribute and value
    * @returns { boolean } data or false
    */

  }, {
    key: "findOneRecord",
    value: function () {
      var _findOneRecord = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(table, value) {
        var data;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return table.findOne({
                  where: value
                });

              case 2:
                data = _context10.sent;

                if (!data) {
                  _context10.next = 5;
                  break;
                }

                return _context10.abrupt("return", data);

              case 5:
                return _context10.abrupt("return", false);

              case 6:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function findOneRecord(_x22, _x23) {
        return _findOneRecord.apply(this, arguments);
      }

      return findOneRecord;
    }()
    /** Query to find and count all request made by a certain manager directs
     *
     * @param {*} table to search into
     * @param {*} managerId the id of the manager
     * @param {Object} limit which includes
     * @param {Object} offset number
     * @returns { array } data found
     */

  }, {
    key: "paginationSearch",
    value: function () {
      var _paginationSearch = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(table, managerId, limit, offset) {
        var requestedTrip;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.prev = 0;
                _context11.next = 3;
                return table.findAndCountAll({
                  where: managerId,
                  group: table.status,
                  order: [['createdAt', 'DESC']],
                  limit: limit,
                  offset: offset
                });

              case 3:
                requestedTrip = _context11.sent;

                if (!(requestedTrip.count > offset)) {
                  _context11.next = 6;
                  break;
                }

                return _context11.abrupt("return", requestedTrip);

              case 6:
                return _context11.abrupt("return", {
                  managerId: managerId
                });

              case 9:
                _context11.prev = 9;
                _context11.t0 = _context11["catch"](0);
                return _context11.abrupt("return", _context11.t0);

              case 12:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, null, [[0, 9]]);
      }));

      function paginationSearch(_x24, _x25, _x26, _x27) {
        return _paginationSearch.apply(this, arguments);
      }

      return paginationSearch;
    }()
    /** Query to find all accomodations
     *
     * @param {*} table to search into
     * @param {*} to destination of the
     * @returns { array } data found
     */

  }, {
    key: "findAccommodation",
    value: function () {
      var _findAccommodation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(table, to) {
        var requestedAccomodation;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.prev = 0;
                _context12.next = 3;
                return table.findAll({
                  where: {
                    locationId: to
                  }
                });

              case 3:
                requestedAccomodation = _context12.sent;
                return _context12.abrupt("return", requestedAccomodation);

              case 7:
                _context12.prev = 7;
                _context12.t0 = _context12["catch"](0);
                return _context12.abrupt("return", _context12.t0);

              case 10:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, null, [[0, 7]]);
      }));

      function findAccommodation(_x28, _x29) {
        return _findAccommodation.apply(this, arguments);
      }

      return findAccommodation;
    }()
    /**
     *
      * @param {string} table users table in database.
     * @param {Integer} userId the id of the user
     * @param {Integer} limit the integer that indicate the entry per page
     * @param {Integer} offset the intiger that Skip entry to go on next page
     * @returns {Object} the booking of the exact passed user id
     */

  }, {
    key: "findRecordById",
    value: function () {
      var _findRecordById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(table, userId, limit, offset) {
        var bookUser;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.prev = 0;
                _context13.next = 3;
                return table.findAndCountAll({
                  where: {
                    userId: userId
                  },
                  order: [['createdAt', 'DESC']],
                  limit: limit,
                  offset: offset
                });

              case 3:
                bookUser = _context13.sent;
                return _context13.abrupt("return", bookUser);

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

      function findRecordById(_x30, _x31, _x32, _x33) {
        return _findRecordById.apply(this, arguments);
      }

      return findRecordById;
    }()
    /** function that gets a pending trip request from the parameter
     * @param {object} table the table to be finding that request from
     * @param {integer} requestId id of the request from the params
     * @returns {object} the found trip request
     */

  }, {
    key: "getTripRequestData",
    value: function () {
      var _getTripRequestData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(table, requestId) {
        var requestFound;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.prev = 0;
                _context14.next = 3;
                return table.findOne({
                  where: (0, _defineProperty2["default"])({}, _sequelize.Op.and, [{
                    id: (0, _defineProperty2["default"])({}, _sequelize.Op.eq, requestId)
                  }])
                });

              case 3:
                requestFound = _context14.sent;
                return _context14.abrupt("return", requestFound);

              case 7:
                _context14.prev = 7;
                _context14.t0 = _context14["catch"](0);
                return _context14.abrupt("return", _context14.t0);

              case 10:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, null, [[0, 7]]);
      }));

      function getTripRequestData(_x34, _x35) {
        return _getTripRequestData.apply(this, arguments);
      }

      return getTripRequestData;
    }()
    /** function that gets all trips that a user created in a given time
     * @param {object} table the table to be finding that request from
     * @param {integer} userId id of the request from the params
     * @param {date} searchDate the date the user searches from
     * @returns {object} the found trip request
     */

  }, {
    key: "getTripCreatedByUser",
    value: function () {
      var _getTripCreatedByUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(table, userId, searchDate) {
        var tripFound;
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.prev = 0;
                _context15.next = 3;
                return table.findAll({
                  distinct: 'tripId',
                  where: (0, _defineProperty2["default"])({}, _sequelize.Op.and, [{
                    userId: (0, _defineProperty2["default"])({}, _sequelize.Op.eq, userId)
                  }, _models["default"].sequelize.where(_models["default"].sequelize.fn('date', _models["default"].sequelize.col('createdAt')), '<=', "".concat(searchDate))])
                });

              case 3:
                tripFound = _context15.sent;
                return _context15.abrupt("return", tripFound);

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

      function getTripCreatedByUser(_x36, _x37, _x38) {
        return _getTripCreatedByUser.apply(this, arguments);
      }

      return getTripCreatedByUser;
    }()
    /** Function to find a user with a manager role
     *
     * @param {object} table table to be searching from
     * @param {integer} managerId id of the manager to be finding
     * @returns {object} data of the manager found
     */

  }, {
    key: "findInUserManager",
    value: function () {
      var _findInUserManager = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(table, managerId) {
        var managerData;
        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.prev = 0;
                managerData = table.findOne({
                  where: (0, _defineProperty2["default"])({}, _sequelize.Op.and, [{
                    id: (0, _defineProperty2["default"])({}, _sequelize.Op.eq, managerId)
                  }, {
                    role: 'manager'
                  }])
                });
                return _context16.abrupt("return", managerData);

              case 5:
                _context16.prev = 5;
                _context16.t0 = _context16["catch"](0);
                return _context16.abrupt("return", _context16.t0);

              case 8:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, null, [[0, 5]]);
      }));

      function findInUserManager(_x39, _x40) {
        return _findInUserManager.apply(this, arguments);
      }

      return findInUserManager;
    }()
    /** Function to update the status to approved or reject
     *
     * @param {object} table to be updating in
     * @param {string} status status to repplacing the current one
     * @param {integer} requestId request id to be found and then replace the status
     * @returns {object} updated data
     */

  }, {
    key: "updateTripRequestStatus",
    value: function () {
      var _updateTripRequestStatus = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(table, status, requestId) {
        var updatedRequest;
        return _regenerator["default"].wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.prev = 0;
                _context17.next = 3;
                return table.update(status, {
                  where: {
                    id: requestId
                  },
                  returning: true
                });

              case 3:
                updatedRequest = _context17.sent;
                return _context17.abrupt("return", updatedRequest);

              case 7:
                _context17.prev = 7;
                _context17.t0 = _context17["catch"](0);
                return _context17.abrupt("return", _context17.t0);

              case 10:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, null, [[0, 7]]);
      }));

      function updateTripRequestStatus(_x41, _x42, _x43) {
        return _updateTripRequestStatus.apply(this, arguments);
      }

      return updateTripRequestStatus;
    }()
    /**
      * This servise delete a trip request comment
      * @param {String} table table
      * @param {Object} value subject id and accoment id
      * @returns { Object } user response as object
      */

  }, {
    key: "deleteComment",
    value: function () {
      var _deleteComment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(table, value) {
        var result;
        return _regenerator["default"].wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.next = 2;
                return table.destroy({
                  where: value
                });

              case 2:
                result = _context18.sent;

                if (!result) {
                  _context18.next = 5;
                  break;
                }

                return _context18.abrupt("return", result);

              case 5:
                return _context18.abrupt("return", false);

              case 6:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18);
      }));

      function deleteComment(_x44, _x45) {
        return _deleteComment.apply(this, arguments);
      }

      return deleteComment;
    }()
    /**
    * find or create query
    * @param {string} table users table in database.
    * @param {string} data the data to be inputed in database.
    * @param {string} condition to prevent the same data in database.
    * @returns {array} data the data to be returned.
    */

  }, {
    key: "findOrCreate",
    value: function () {
      var _findOrCreate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19(table, data, condition) {
        var datas;
        return _regenerator["default"].wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _context19.prev = 0;
                _context19.next = 3;
                return table.findOrCreate({
                  where: condition,
                  defaults: data
                });

              case 3:
                datas = _context19.sent;
                return _context19.abrupt("return", datas[0]);

              case 7:
                _context19.prev = 7;
                _context19.t0 = _context19["catch"](0);
                return _context19.abrupt("return", _context19.t0);

              case 10:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, null, [[0, 7]]);
      }));

      function findOrCreate(_x46, _x47, _x48) {
        return _findOrCreate.apply(this, arguments);
      }

      return findOrCreate;
    }()
    /**
     * find trip function
     * @param {String} table table name
     * @param {Object} tripId trip id
     * @returns { Object } result
     */

  }, {
    key: "getTripByTripId",
    value: function () {
      var _getTripByTripId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20(table, tripId) {
        var data;
        return _regenerator["default"].wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                _context20.next = 2;
                return table.findAll({
                  where: {
                    tripId: tripId
                  }
                });

              case 2:
                data = _context20.sent;
                return _context20.abrupt("return", data);

              case 4:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20);
      }));

      function getTripByTripId(_x49, _x50) {
        return _getTripByTripId.apply(this, arguments);
      }

      return getTripByTripId;
    }()
    /**
     *
     * Function to update the status to approved or reject
     * @param {String} table the name of the table to updated
     * @param {string} tripId the id of the selected trip
     * @param {Object} data it gets the data from req.body
     * @returns {object} updated data
     */

  }, {
    key: "updateTrip",
    value: function () {
      var _updateTrip = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee21(table, tripId, data) {
        var updatedRequest;
        return _regenerator["default"].wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                _context21.prev = 0;
                _context21.next = 3;
                return table.update(data, {
                  where: {
                    id: tripId
                  }
                });

              case 3:
                updatedRequest = _context21.sent;
                return _context21.abrupt("return", updatedRequest);

              case 7:
                _context21.prev = 7;
                _context21.t0 = _context21["catch"](0);
                return _context21.abrupt("return", _context21.t0);

              case 10:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, null, [[0, 7]]);
      }));

      function updateTrip(_x51, _x52, _x53) {
        return _updateTrip.apply(this, arguments);
      }

      return updateTrip;
    }()
    /** Function to update the status to approved or reject
     *
     * @param {object} table to be updating in
     * @param {integer} id trip id to be found and then replace the status
     * @returns {object} updated data
     */

  }, {
    key: "updateTripRequestStatusById",
    value: function () {
      var _updateTripRequestStatusById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee22(table, id) {
        var updatedRequest;
        return _regenerator["default"].wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                _context22.prev = 0;
                _context22.next = 3;
                return table.update({
                  status: 'pending'
                }, {
                  where: {
                    id: id
                  }
                });

              case 3:
                updatedRequest = _context22.sent;
                return _context22.abrupt("return", updatedRequest);

              case 7:
                _context22.prev = 7;
                _context22.t0 = _context22["catch"](0);
                return _context22.abrupt("return", _context22.t0);

              case 10:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, null, [[0, 7]]);
      }));

      function updateTripRequestStatusById(_x54, _x55) {
        return _updateTripRequestStatusById.apply(this, arguments);
      }

      return updateTripRequestStatusById;
    }()
    /**
     *
     * This method will be used to delete a certain request in multicity when the request of the user decreased
     * @param {String} table the name of the table to updated
     * @param {string} tripId the id of the selected trip
     * @param {Object} data it gets the data from req.body
     * @returns {object} updated data
     */

  }, {
    key: "deleteMultiCityTripRequestByTripId",
    value: function () {
      var _deleteMultiCityTripRequestByTripId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee23(table, tripId) {
        var updatedRequest;
        return _regenerator["default"].wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                _context23.prev = 0;
                _context23.next = 3;
                return table.destroy({
                  where: {
                    id: tripId
                  }
                });

              case 3:
                updatedRequest = _context23.sent;
                return _context23.abrupt("return", updatedRequest);

              case 7:
                _context23.prev = 7;
                _context23.t0 = _context23["catch"](0);
                return _context23.abrupt("return", _context23.t0);

              case 10:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, null, [[0, 7]]);
      }));

      function deleteMultiCityTripRequestByTripId(_x56, _x57) {
        return _deleteMultiCityTripRequestByTripId.apply(this, arguments);
      }

      return deleteMultiCityTripRequestByTripId;
    }()
    /** Function to find if the user booked that specific accommodation
     *
     * @param {object} table table to be searching from
     * @param {Object} userid user id
     * @param {Object} accommodationid accomodation id
     * @returns {object} data of the accommodation found that corresponds to that user id and accomodation id
     */

  }, {
    key: "findIfAccomodationBooked",
    value: function () {
      var _findIfAccomodationBooked = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee24(table, userid, accommodationid) {
        var tripData;
        return _regenerator["default"].wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                _context24.prev = 0;
                tripData = table.findOne({
                  where: (0, _defineProperty2["default"])({}, _sequelize.Op.and, [{
                    userid: (0, _defineProperty2["default"])({}, _sequelize.Op.eq, userid)
                  }, {
                    accommodationid: (0, _defineProperty2["default"])({}, _sequelize.Op.eq, accommodationid)
                  }])
                });
                return _context24.abrupt("return", tripData);

              case 5:
                _context24.prev = 5;
                _context24.t0 = _context24["catch"](0);
                return _context24.abrupt("return", _context24.t0);

              case 8:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, null, [[0, 5]]);
      }));

      function findIfAccomodationBooked(_x58, _x59, _x60) {
        return _findIfAccomodationBooked.apply(this, arguments);
      }

      return findIfAccomodationBooked;
    }()
    /**
     *
     * This method will be used to get all messages between a sender and receiver upon login
     * @param {String} table the name of the table to updated
     * @param {integer} senderId the id of the user who sent the message
     * @param {integer} receiverId the id of the connected user
     * @returns {object} messages retrieved
     */

  }, {
    key: "getPrivateMessage",
    value: function () {
      var _getPrivateMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee25(table, senderId, receiverId) {
        var privateMessages;
        return _regenerator["default"].wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                _context25.prev = 0;
                _context25.next = 3;
                return table.findAll({
                  where: (0, _defineProperty2["default"])({}, _sequelize.Op.or, [(0, _defineProperty2["default"])({}, _sequelize.Op.and, [{
                    senderId: senderId
                  }, {
                    receiverId: receiverId
                  }]), (0, _defineProperty2["default"])({}, _sequelize.Op.and, [{
                    senderId: receiverId
                  }, {
                    receiverId: senderId
                  }])])
                });

              case 3:
                privateMessages = _context25.sent;
                return _context25.abrupt("return", privateMessages);

              case 7:
                _context25.prev = 7;
                _context25.t0 = _context25["catch"](0);
                return _context25.abrupt("return", _context25.t0);

              case 10:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, null, [[0, 7]]);
      }));

      function getPrivateMessage(_x61, _x62, _x63) {
        return _getPrivateMessage.apply(this, arguments);
      }

      return getPrivateMessage;
    }()
    /**
    * checking if the accommodation exist
    * @param {object} table table to be searching from
    * @param {string} accomodationId rate data.
    * @returns {array} data the data to be returned.
    */

  }, {
    key: "checkAccommodationById",
    value: function () {
      var _checkAccommodationById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee26(table, accomodationId) {
        var data;
        return _regenerator["default"].wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                _context26.next = 2;
                return table.findAll({
                  where: {
                    id: accomodationId
                  }
                });

              case 2:
                data = _context26.sent;
                return _context26.abrupt("return", data);

              case 4:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26);
      }));

      function checkAccommodationById(_x64, _x65) {
        return _checkAccommodationById.apply(this, arguments);
      }

      return checkAccommodationById;
    }()
    /**
    * checking if the accommodation exist
    * @param {object} table table to be searching from
    * @param {string} accommodationId rate data.
    * @returns {array} data the data to be returned.
    */

  }, {
    key: "getRatedAccommodations",
    value: function () {
      var _getRatedAccommodations = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee27(table, accommodationId) {
        var data;
        return _regenerator["default"].wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                _context27.next = 2;
                return table.findAll({
                  where: {
                    accommodationId: accommodationId
                  }
                });

              case 2:
                data = _context27.sent;
                return _context27.abrupt("return", data);

              case 4:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27);
      }));

      function getRatedAccommodations(_x66, _x67) {
        return _getRatedAccommodations.apply(this, arguments);
      }

      return getRatedAccommodations;
    }()
    /**
    * updating average rate in accommodation
    * @param {object} table table to be searching from
    * @param {integer} accomodationId accommodation id
    * @param {integer} averageRate the rate average
    * @returns {array} data the data to be returned.
    */

  }, {
    key: "updateAverageRate",
    value: function () {
      var _updateAverageRate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee28(table, accomodationId, averageRate) {
        var updatedRate;
        return _regenerator["default"].wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                _context28.prev = 0;
                _context28.next = 3;
                return table.update({
                  averageRate: averageRate
                }, {
                  where: {
                    id: accomodationId
                  }
                });

              case 3:
                updatedRate = _context28.sent;
                return _context28.abrupt("return", updatedRate);

              case 7:
                _context28.prev = 7;
                _context28.t0 = _context28["catch"](0);
                return _context28.abrupt("return", _context28.t0);

              case 10:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, null, [[0, 7]]);
      }));

      function updateAverageRate(_x68, _x69, _x70) {
        return _updateAverageRate.apply(this, arguments);
      }

      return updateAverageRate;
    }()
    /**
    * updating rating
    * @param {object} table table to be searching from
    * @param {integer} accomodationId accommodation id
    * @param {Object} userId user id
    * @param {integer} rate rating value
    * @returns {array} data the data to be returned.
    */

  }, {
    key: "updateAccomodationRate",
    value: function () {
      var _updateAccomodationRate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee29(table, accomodationId, userId, rate) {
        var updatedRate;
        return _regenerator["default"].wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                _context29.prev = 0;
                _context29.next = 3;
                return table.update({
                  rate: rate
                }, {
                  where: (0, _defineProperty2["default"])({}, _sequelize.Op.and, [{
                    userId: (0, _defineProperty2["default"])({}, _sequelize.Op.eq, userId)
                  }, {
                    accomodationId: (0, _defineProperty2["default"])({}, _sequelize.Op.eq, accomodationId)
                  }])
                });

              case 3:
                updatedRate = _context29.sent;
                return _context29.abrupt("return", updatedRate);

              case 7:
                _context29.prev = 7;
                _context29.t0 = _context29["catch"](0);
                return _context29.abrupt("return", _context29.t0);

              case 10:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, null, [[0, 7]]);
      }));

      function updateAccomodationRate(_x71, _x72, _x73, _x74) {
        return _updateAccomodationRate.apply(this, arguments);
      }

      return updateAccomodationRate;
    }()
    /** Function to find updated rating
     *
     * @param {object} table table to be searching from
     * @param {Object} accommodationId accomodation id
     * @param {Object} userId user id
     * @returns {object} data of the trip found that corresponds to that user and accomodation id
     */

  }, {
    key: "getAccommodationRate",
    value: function () {
      var _getAccommodationRate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee30(table, accommodationId, userId) {
        var updatedRate;
        return _regenerator["default"].wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                _context30.prev = 0;
                updatedRate = table.findOne({
                  where: (0, _defineProperty2["default"])({}, _sequelize.Op.and, [{
                    userId: (0, _defineProperty2["default"])({}, _sequelize.Op.eq, userId)
                  }, {
                    accommodationId: (0, _defineProperty2["default"])({}, _sequelize.Op.eq, accommodationId)
                  }])
                });
                return _context30.abrupt("return", updatedRate);

              case 5:
                _context30.prev = 5;
                _context30.t0 = _context30["catch"](0);
                return _context30.abrupt("return", _context30.t0);

              case 8:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, null, [[0, 5]]);
      }));

      function getAccommodationRate(_x75, _x76, _x77) {
        return _getAccommodationRate.apply(this, arguments);
      }

      return getAccommodationRate;
    }()
    /**
    * Get average accommodation using accommodation id
    * @param {object} table table to be searching from
    * @param {integer} accomodationId accommodation id
    * @returns {array} data the data to be returned.
    */

  }, {
    key: "getAverageRatings",
    value: function () {
      var _getAverageRatings = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee31(table, accomodationId) {
        var averageRate;
        return _regenerator["default"].wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                _context31.prev = 0;
                _context31.next = 3;
                return table.findAll({
                  where: {
                    id: accomodationId
                  }
                });

              case 3:
                averageRate = _context31.sent;
                return _context31.abrupt("return", averageRate);

              case 7:
                _context31.prev = 7;
                _context31.t0 = _context31["catch"](0);
                return _context31.abrupt("return", _context31.t0);

              case 10:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, null, [[0, 7]]);
      }));

      function getAverageRatings(_x78, _x79) {
        return _getAverageRatings.apply(this, arguments);
      }

      return getAverageRatings;
    }()
    /** Query to find and count all request made by a certain manager directs
     *
     * @param {*} table to search into
     * @param {Object} where which includes
     * @param {Object} limit which includes
     * @param {Object} offset number
     * @returns { array } data found
     */

  }, {
    key: "commentsPaginationSearch",
    value: function () {
      var _commentsPaginationSearch = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee32(table, where, limit, offset) {
        var comments;
        return _regenerator["default"].wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                _context32.prev = 0;
                _context32.next = 3;
                return table.findAndCountAll({
                  where: where,
                  include: [{
                    model: _models["default"].user,
                    attributes: ['firstName', 'lastName', 'email', 'profileImage']
                  }],
                  order: [['createdAt', 'DESC']],
                  limit: limit,
                  offset: offset
                });

              case 3:
                comments = _context32.sent;
                return _context32.abrupt("return", comments);

              case 7:
                _context32.prev = 7;
                _context32.t0 = _context32["catch"](0);
                return _context32.abrupt("return", _context32.t0);

              case 10:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, null, [[0, 7]]);
      }));

      function commentsPaginationSearch(_x80, _x81, _x82, _x83) {
        return _commentsPaginationSearch.apply(this, arguments);
      }

      return commentsPaginationSearch;
    }()
    /** Query to find accomodations
     * @param {string} table table to searched in
    * @param {Object} limit accommodation request
    * @param {Object} offset accommodation for the page
    * @returns {array} returns all accommodations
     */

  }, {
    key: "getAllAccommodations",
    value: function () {
      var _getAllAccommodations = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee33(table, limit, offset) {
        var accommodation;
        return _regenerator["default"].wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                _context33.prev = 0;
                _context33.next = 3;
                return table.findAndCountAll({
                  include: [{
                    model: _models["default"].locations,
                    attributes: ['city']
                  }],
                  order: [['id', 'DESC']],
                  limit: limit,
                  offset: offset
                });

              case 3:
                accommodation = _context33.sent;
                return _context33.abrupt("return", accommodation);

              case 7:
                _context33.prev = 7;
                _context33.t0 = _context33["catch"](0);
                return _context33.abrupt("return", _context33.t0);

              case 10:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, null, [[0, 7]]);
      }));

      function getAllAccommodations(_x84, _x85, _x86) {
        return _getAllAccommodations.apply(this, arguments);
      }

      return getAllAccommodations;
    }()
    /** Query to find all rooms
     * @param {string} table table to searched in
    * @param {integer} where accommodation condition
    * @param {Object} limit accommodation request
    * @param {Object} offset accommodation for the page
    * @returns {array} returns all accommodations
     */

  }, {
    key: "getAllRooms",
    value: function () {
      var _getAllRooms = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee34(table, where, limit, offset) {
        var rooms;
        return _regenerator["default"].wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                _context34.prev = 0;
                _context34.next = 3;
                return table.findAndCountAll({
                  where: where,
                  include: [{
                    model: _models["default"].accomodationtype,
                    attributes: ['name']
                  }],
                  order: [['id', 'DESC']],
                  limit: limit,
                  offset: offset
                });

              case 3:
                rooms = _context34.sent;
                return _context34.abrupt("return", rooms);

              case 7:
                _context34.prev = 7;
                _context34.t0 = _context34["catch"](0);
                return _context34.abrupt("return", _context34.t0);

              case 10:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, null, [[0, 7]]);
      }));

      function getAllRooms(_x87, _x88, _x89, _x90) {
        return _getAllRooms.apply(this, arguments);
      }

      return getAllRooms;
    }()
  }]);
  return Queries;
}();

var _default = Queries;
exports["default"] = _default;