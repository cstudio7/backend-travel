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

var _response = _interopRequireDefault(require("../helpers/response.helper"));

var _user = _interopRequireDefault(require("../services/user.service"));

var _accomodation = _interopRequireDefault(require("../services/accomodation.service"));

var _room = _interopRequireDefault(require("../services/room.services"));

/**
* Class for users to create trips
*/
var AccomodationMiddleware = /*#__PURE__*/function () {
  function AccomodationMiddleware() {
    (0, _classCallCheck2["default"])(this, AccomodationMiddleware);
  }

  (0, _createClass2["default"])(AccomodationMiddleware, null, [{
    key: "findAccommodationByCity",

    /** checks if the accomodation selected are in the same location as the destination of the user
     *  @param {req} req it contains the request of the user
     *  @param {res} res it contains the response the user receive
     *  @param {function} next it jumps to the next middleware in the route
     * @return {object} the data from the first middleware
     */
    value: function () {
      var _findAccommodationByCity = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
        var bodyData, _req$body, To, accomodationCategory, accomodationId, accomodations;

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
                _req$body = req.body, To = _req$body.To, accomodationCategory = _req$body.accomodationCategory, accomodationId = _req$body.accomodationId;

                if (!accomodationCategory) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", next());

              case 6:
                _context.next = 8;
                return _accomodation["default"].findAccomodationByCity(To);

              case 8:
                accomodations = _context.sent;

                if (accomodations) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt("return", _response["default"].errorMessage(res, 'There are no available accommodations in that destination', 404));

              case 11:
                next();

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function findAccommodationByCity(_x, _x2, _x3) {
        return _findAccommodationByCity.apply(this, arguments);
      }

      return findAccommodationByCity;
    }()
    /**
    *
    * @param {Object} req req
    * @param {Object} res res
    * @param {Object} next ment
    * @returns {Object} hghfgjh
    */

  }, {
    key: "verifyTravelAdminAndSupplier",
    value: function () {
      var _verifyTravelAdminAndSupplier = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
        var user, role, supportedRole, roleId;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _user["default"].findUserByEmail(req.user.email);

              case 2:
                user = _context2.sent;
                role = user.role.toLowerCase();
                _context2.next = 6;
                return _user["default"].getRole(role);

              case 6:
                supportedRole = _context2.sent;
                roleId = supportedRole.dataValues.id;

                if (!(roleId === 3 || roleId === 6)) {
                  _response["default"].errorMessage(res, 'You are not authorized to perform this action', 401, 'error');
                }

                return _context2.abrupt("return", next());

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function verifyTravelAdminAndSupplier(_x4, _x5, _x6) {
        return _verifyTravelAdminAndSupplier.apply(this, arguments);
      }

      return verifyTravelAdminAndSupplier;
    }()
    /** This function if the rate is correct not greater five and if it is not a string
     *  @param {req} req it contains the request from the body
     *  @param {res} res it contains the response to be returned
     *  @param {function} next it jumps to the next middleware in the route
     * @return {object} the data from the first middleware
     */

  }, {
    key: "checkValidAccomodationRates",
    value: function () {
      var _checkValidAccomodationRates = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
        var rate, accommodationId;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                rate = req.body.rate;
                accommodationId = req.params.accommodationId || req.params.subjectID;

                if (!(rate >= 6)) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt("return", _response["default"].errorMessage(res, 'Rating value can not be greater than five', 401));

              case 4:
                if (!(!/[0-9]/g.test(+rate) || !/[0-9]/g.test(+accommodationId))) {
                  _context3.next = 6;
                  break;
                }

                return _context3.abrupt("return", _response["default"].errorMessage(res, 'Rating or accommodation id value must be integer', 401));

              case 6:
                next();

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function checkValidAccomodationRates(_x7, _x8, _x9) {
        return _checkValidAccomodationRates.apply(this, arguments);
      }

      return checkValidAccomodationRates;
    }()
    /** This function if used to check if the user has booked that accommodation
     *  @param {req} req it contains the request from the body
     *  @param {res} res it contains the response to be returned
     *  @param {function} next it jumps to the next middleware in the route
     * @return {object} the data from the first middleware
     */

  }, {
    key: "checkIfUserBookedThatAccomodation",
    value: function () {
      var _checkIfUserBookedThatAccomodation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
        var userid, accommodationid, accommodationExist;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                userid = req.user.id;
                accommodationid = req.params.subjectID || req.params.accommodationId;
                _context4.next = 4;
                return _accomodation["default"].findIfAccomodationBooked(userid, +accommodationid);

              case 4:
                accommodationExist = _context4.sent;

                if (accommodationExist) {
                  _context4.next = 7;
                  break;
                }

                return _context4.abrupt("return", _response["default"].errorMessage(res, 'You have not booked that accomodation', 401));

              case 7:
                next();

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function checkIfUserBookedThatAccomodation(_x10, _x11, _x12) {
        return _checkIfUserBookedThatAccomodation.apply(this, arguments);
      }

      return checkIfUserBookedThatAccomodation;
    }()
    /** Checks if the accomodation selected have facilities available and choose a room for a client
     *  @param {req} req it contains the request of the user
     *  @param {res} res it contains the response the user receive
     *  @param {function} next it jumps to the next middleware in the route
     * @return {object} the data from the first middleware
     */

  }, {
    key: "checkBookingFacilitiesAvailability",
    value: function () {
      var _checkBookingFacilitiesAvailability = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
        var accomodation, room;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _accomodation["default"].findAccomodation(req.body.accommodationId);

              case 2:
                accomodation = _context5.sent;

                if (accomodation) {
                  _context5.next = 5;
                  break;
                }

                return _context5.abrupt("return", _response["default"].errorMessage(res, 'We don\'t have accommodation for an accommodationId provided.', 404));

              case 5:
                _context5.next = 7;
                return _room["default"].getAvalableRoom(req.body.accommodationId, req.body.roomTypeId);

              case 7:
                room = _context5.sent;

                if (!(accomodation.availableRooms === 0 || room === null)) {
                  _context5.next = 10;
                  break;
                }

                return _context5.abrupt("return", _response["default"].successMessage(res, 'There\'s no rooms available for accommodation facility provided.', 404));

              case 10:
                room.update({
                  status: 'booked'
                });
                req.body.roomId = room.id;
                next();

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function checkBookingFacilitiesAvailability(_x13, _x14, _x15) {
        return _checkBookingFacilitiesAvailability.apply(this, arguments);
      }

      return checkBookingFacilitiesAvailability;
    }()
    /** Chech if departure date greater than checkout date
     *  @param {req} req it contains the request of the user
     *  @param {res} res it contains the response the user receive
     *  @param {function} next it jumps to the next middleware in the route
     * @return {object} the data from the first middleware
     */

  }, {
    key: "validateDates",
    value: function () {
      var _validateDates = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res, next) {
        var departureDate, checkoutDate;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                departureDate = new Date(req.body.departureDate);
                checkoutDate = new Date(req.body.checkoutDate);

                if (!(checkoutDate <= departureDate)) {
                  _context6.next = 4;
                  break;
                }

                return _context6.abrupt("return", _response["default"].errorMessage(res, 'The departure date cannot be later than the return date', 400));

              case 4:
                req.body.departureDate = departureDate;
                req.body.checkoutDate = checkoutDate;
                next();

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function validateDates(_x16, _x17, _x18) {
        return _validateDates.apply(this, arguments);
      }

      return validateDates;
    }()
    /** This function if the the accommodation id provided is in our database
     *  @param {req} req it contains the request from the body
     *  @param {res} res it contains the response to be returned
     *  @param {function} next it jumps to the next middleware in the route
     * @return {object} the data from the first middleware
     */

  }, {
    key: "checkIfAccommodationIdExist",
    value: function () {
      var _checkIfAccommodationIdExist = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res, next) {
        var accommodationId, accomodations;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                accommodationId = req.params.accommodationId;
                _context7.next = 3;
                return _accomodation["default"].checkAccommodationById(accommodationId);

              case 3:
                accomodations = _context7.sent;

                if (accomodations[0]) {
                  _context7.next = 6;
                  break;
                }

                return _context7.abrupt("return", _response["default"].errorMessage(res, 'This accommodation does not exist', 401));

              case 6:
                next();

              case 7:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function checkIfAccommodationIdExist(_x19, _x20, _x21) {
        return _checkIfAccommodationIdExist.apply(this, arguments);
      }

      return checkIfAccommodationIdExist;
    }()
    /** This function if the user who is performing the action is an admin or travel admin in our database
     *  @param {req} req it contains the request from the body
     *  @param {res} res it contains the response to be returned
     *  @param {function} next it jumps to the next middleware in the route
     * @return {object} the data from the first middleware
     */

  }, {
    key: "checkIfRequesterIsAdmin",
    value: function () {
      var _checkIfRequesterIsAdmin = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res, next) {
        var user, role;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return _user["default"].findUserByEmail(req.user.email);

              case 2:
                user = _context8.sent;
                role = user.role.toLowerCase();

                if (!(role === 'admin' || role === 'travel Admin')) {
                  _context8.next = 6;
                  break;
                }

                return _context8.abrupt("return", next());

              case 6:
                return _context8.abrupt("return", _response["default"].errorMessage(res, 'You can not perform this Action', 401, 'error'));

              case 7:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function checkIfRequesterIsAdmin(_x22, _x23, _x24) {
        return _checkIfRequesterIsAdmin.apply(this, arguments);
      }

      return checkIfRequesterIsAdmin;
    }()
  }]);
  return AccomodationMiddleware;
}();

var _default = AccomodationMiddleware;
exports["default"] = _default;