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

/** accommodation service */
var accommodationService = /*#__PURE__*/function () {
  function accommodationService() {
    (0, _classCallCheck2["default"])(this, accommodationService);
  }

  (0, _createClass2["default"])(accommodationService, null, [{
    key: "findAccomodation",

    /**
       * find room status
       * @param { Integer } accId accomodation id
       * @returns { boolean } true or false
       */
    value: function () {
      var _findAccomodation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(accId) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _Queries["default"].findOneRecord(_models["default"].accomodation, {
                  id: accId
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function findAccomodation(_x) {
        return _findAccomodation.apply(this, arguments);
      }

      return findAccomodation;
    }()
    /**
       * create an accomodation
       * @param { Object } newAccomodation accomodation id
       * @returns {array} data the data to be returned.
       */

  }, {
    key: "createAccomodation",
    value: function () {
      var _createAccomodation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(newAccomodation) {
        var condition;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                condition = {
                  name: newAccomodation.name,
                  locationId: newAccomodation.locationId
                };
                return _context2.abrupt("return", _Queries["default"].findOrCreate(_models["default"].accomodation, newAccomodation, condition));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function createAccomodation(_x2) {
        return _createAccomodation.apply(this, arguments);
      }

      return createAccomodation;
    }()
    /**
       * create accommodation additional services
       * @param { Object } newService contains services name and accommodationId
       * @returns {array} data the data to be returned.
       */

  }, {
    key: "createAccommodationService",
    value: function () {
      var _createAccommodationService = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(newService) {
        var condition;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                condition = {
                  name: newService.name,
                  accomodationId: newService.accomodationId
                };
                return _context3.abrupt("return", _Queries["default"].findOrCreate(_models["default"].accomodationservice, newService, condition));

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function createAccommodationService(_x3) {
        return _createAccommodationService.apply(this, arguments);
      }

      return createAccommodationService;
    }()
    /**
       * create accommodation amenities
       * @param { Object } newAmenity contains amenity name and accommodationId
       * @returns {array} data the data to be returned.
       */

  }, {
    key: "createAccommodationAmenity",
    value: function () {
      var _createAccommodationAmenity = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(newAmenity) {
        var condition;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                condition = {
                  name: newAmenity.name,
                  accomodationId: newAmenity.accomodationId
                };
                return _context4.abrupt("return", _Queries["default"].findOrCreate(_models["default"].accomodationamenity, newAmenity, condition));

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function createAccommodationAmenity(_x4) {
        return _createAccommodationAmenity.apply(this, arguments);
      }

      return createAccommodationAmenity;
    }()
    /**
       * get accommodation
       * @param { Object } accomodationId contains amenity name and accommodationId
       * @returns {array} data the data to be returned.
       */

  }, {
    key: "getAccomodation",
    value: function () {
      var _getAccomodation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(accomodationId) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", _Queries["default"].findAllRecord(_models["default"].accomodation, {
                  id: accomodationId
                }));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function getAccomodation(_x5) {
        return _getAccomodation.apply(this, arguments);
      }

      return getAccomodation;
    }()
    /**
       * get accommodation
       * @param { Object } accomodationId contains amenity name and accommodationId
       * @returns {array} data the data to be returned.
       */

  }, {
    key: "getAccomodationServices",
    value: function () {
      var _getAccomodationServices = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(accomodationId) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", _Queries["default"].findAllRecord(_models["default"].accomodationservice, {
                  accomodationId: accomodationId
                }));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function getAccomodationServices(_x6) {
        return _getAccomodationServices.apply(this, arguments);
      }

      return getAccomodationServices;
    }()
    /**
       * get accommodation
       * @param { Object } accomodationId contains amenity name and accommodationId
       * @returns {array} data the data to be returned.
       */

  }, {
    key: "getAccomodationAmenities",
    value: function () {
      var _getAccomodationAmenities = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(accomodationId) {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", _Queries["default"].findAllRecord(_models["default"].accomodationamenity, {
                  accomodationId: accomodationId
                }));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function getAccomodationAmenities(_x7) {
        return _getAccomodationAmenities.apply(this, arguments);
      }

      return getAccomodationAmenities;
    }()
    /**
       * updating AccommodationNumberOfRooms
       * @param { Object } accomodationId contains amenity name and accommodationId
       * @param { Object } numberOfRooms contains amenity name and accommodationId
       * @returns {array} data the data to be returned.
       */

  }, {
    key: "updateAccommodationNumberOfRooms",
    value: function () {
      var _updateAccommodationNumberOfRooms = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(accomodationId, numberOfRooms) {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", _models["default"].accomodation.increment({
                  numberOfRooms: numberOfRooms,
                  availableRooms: numberOfRooms
                }, {
                  where: {
                    id: accomodationId
                  },
                  returning: true
                }));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function updateAccommodationNumberOfRooms(_x8, _x9) {
        return _updateAccommodationNumberOfRooms.apply(this, arguments);
      }

      return updateAccommodationNumberOfRooms;
    }()
    /** Finds all accommodations that belong in a given city
     *
     * @param {Integer} to destination  id
     * @returns { array } list of accommodations
     */

  }, {
    key: "findAccomodationByCity",
    value: function () {
      var _findAccomodationByCity = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(to) {
        var requestedAccomodation;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return _Queries["default"].findAccommodation(_models["default"].accomodation, to);

              case 3:
                requestedAccomodation = _context9.sent;
                return _context9.abrupt("return", requestedAccomodation);

              case 7:
                _context9.prev = 7;
                _context9.t0 = _context9["catch"](0);
                return _context9.abrupt("return", _context9.t0);

              case 10:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, null, [[0, 7]]);
      }));

      function findAccomodationByCity(_x10) {
        return _findAccomodationByCity.apply(this, arguments);
      }

      return findAccomodationByCity;
    }()
    /**
    * book an accommodation facilities
    * @param { Number } userId user id
    * @param { Number } accommodationId accommodation id
    * @param { String } roomid room id
    * @param { Date } departureDate departure date
    * @param { Date } checkoutDate checkout date
    * @returns { Object } an accommodation
    */

  }, {
    key: "bookAccommodation",
    value: function () {
      var _bookAccommodation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(userId, accommodationId, roomid, departureDate, checkoutDate) {
        var query;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return _models["default"].booking.create({
                  userid: userId,
                  accommodationid: accommodationId,
                  roomid: roomid,
                  departuredate: departureDate,
                  checkoutdate: checkoutDate
                });

              case 2:
                query = _context10.sent;
                _context10.next = 5;
                return _models["default"].accomodation.decrement('availableRooms', {
                  by: 1,
                  where: {
                    id: accommodationId
                  }
                });

              case 5:
                return _context10.abrupt("return", query);

              case 6:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function bookAccommodation(_x11, _x12, _x13, _x14, _x15) {
        return _bookAccommodation.apply(this, arguments);
      }

      return bookAccommodation;
    }()
    /**
    * check if user has already booked an accommodation facilities on the same date
    * @param { Number } userId user id
    * @param { Number } accommodationId accommodation id
    * @param { Date } departureDate departure date
    * @param { Date } checkoutDate checkout date
    * @returns { Object } an accommodation
    */

  }, {
    key: "checkIfUserAlreadyBookedAccommodation",
    value: function () {
      var _checkIfUserAlreadyBookedAccommodation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(userId, accommodationId, departureDate, checkoutDate) {
        var query;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return _models["default"].bookedaccommodations.findOne({
                  where: {
                    userid: userId,
                    accommodationid: accommodationId,
                    departuredate: departureDate,
                    checkoutdate: checkoutDate
                  }
                });

              case 2:
                query = _context11.sent;
                return _context11.abrupt("return", query);

              case 4:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      function checkIfUserAlreadyBookedAccommodation(_x16, _x17, _x18, _x19) {
        return _checkIfUserAlreadyBookedAccommodation.apply(this, arguments);
      }

      return checkIfUserAlreadyBookedAccommodation;
    }()
    /**
    * like or unlike an accommodation facilities
    * @param { Boolean } isLike this will be true or false
    * @param { Number } userId user id
    * @param { Number } accommodationId accommodation id
    * @returns { Object } an accommodation
    */

  }, {
    key: "likeOrUnlike",
    value: function () {
      var _likeOrUnlike = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(isLike, userId, accommodationId) {
        var result;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this.findIfUserAlreadLiked(userId, accommodationId);

              case 2:
                result = _context12.sent;

                if (!result) {
                  _context12.next = 19;
                  break;
                }

                if (!(result.islike === isLike)) {
                  _context12.next = 6;
                  break;
                }

                return _context12.abrupt("return", this.findAccomodation(accommodationId));

              case 6:
                _context12.next = 8;
                return result.update({
                  islike: isLike
                });

              case 8:
                if (!isLike) {
                  _context12.next = 14;
                  break;
                }

                _context12.next = 11;
                return _models["default"].accomodation.increment('likes', {
                  by: 1,
                  where: {
                    id: accommodationId
                  }
                });

              case 11:
                _context12.next = 13;
                return _models["default"].accomodation.decrement('unlikes', {
                  by: 1,
                  where: {
                    id: accommodationId
                  }
                });

              case 13:
                return _context12.abrupt("return", this.findAccomodation(accommodationId));

              case 14:
                _context12.next = 16;
                return _models["default"].accomodation.increment('unlikes', {
                  by: 1,
                  where: {
                    id: accommodationId
                  }
                });

              case 16:
                _context12.next = 18;
                return _models["default"].accomodation.decrement('likes', {
                  by: 1,
                  where: {
                    id: accommodationId
                  }
                });

              case 18:
                return _context12.abrupt("return", this.findAccomodation(accommodationId));

              case 19:
                _context12.next = 21;
                return _models["default"].accommodationLikesAndUnlikes.create({
                  islike: isLike,
                  userid: userId,
                  accommodationid: accommodationId
                });

              case 21:
                if (!isLike) {
                  _context12.next = 25;
                  break;
                }

                _context12.next = 24;
                return _models["default"].accomodation.increment('likes', {
                  by: 1,
                  where: {
                    id: accommodationId
                  }
                });

              case 24:
                return _context12.abrupt("return", this.findAccomodation(accommodationId));

              case 25:
                _context12.next = 27;
                return _models["default"].accomodation.increment('unlikes', {
                  by: 1,
                  where: {
                    id: accommodationId
                  }
                });

              case 27:
                return _context12.abrupt("return", this.findAccomodation(accommodationId));

              case 28:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function likeOrUnlike(_x20, _x21, _x22) {
        return _likeOrUnlike.apply(this, arguments);
      }

      return likeOrUnlike;
    }()
    /**
    * like or unlike an accommodation facilities
    * @param { Number } userId user id
    * @param { Number } accommodationId accommodation id
    * @returns { Object } an accommodation
    */

  }, {
    key: "findIfUserAlreadLiked",
    value: function () {
      var _findIfUserAlreadLiked = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(userId, accommodationId) {
        var query;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return _models["default"].accommodationLikesAndUnlikes.findOne({
                  where: {
                    userid: userId,
                    accommodationid: accommodationId
                  }
                });

              case 2:
                query = _context13.sent;
                return _context13.abrupt("return", query);

              case 4:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }));

      function findIfUserAlreadLiked(_x23, _x24) {
        return _findIfUserAlreadLiked.apply(this, arguments);
      }

      return findIfUserAlreadLiked;
    }()
    /**
    * creating rating query
    * @param {string} rateData rate data.
    * @returns {array} data the data to be returned.
    */

  }, {
    key: "CreateAccomodationRate",
    value: function () {
      var _CreateAccomodationRate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(rateData) {
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                return _context14.abrupt("return", _Queries["default"].create(_models["default"].accomodationRates, rateData));

              case 1:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14);
      }));

      function CreateAccomodationRate(_x25) {
        return _CreateAccomodationRate.apply(this, arguments);
      }

      return CreateAccomodationRate;
    }()
    /**
    * creating rating query
    * @param {integer} accomodationId accommodation id
    * @param {integer} averageRate the rate average
    * @returns {array} data the data to be returned.
    */

  }, {
    key: "updateAverageRate",
    value: function () {
      var _updateAverageRate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(accomodationId, averageRate) {
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                return _context15.abrupt("return", _Queries["default"].updateAverageRate(_models["default"].accomodation, accomodationId, averageRate));

              case 1:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15);
      }));

      function updateAverageRate(_x26, _x27) {
        return _updateAverageRate.apply(this, arguments);
      }

      return updateAverageRate;
    }()
    /**
    * checking if the accommodation exist using it's id
    * @param {integer} accomodationId accommodation id
    * @returns {array} data the data to be returned.
    */

  }, {
    key: "checkAccommodationById",
    value: function () {
      var _checkAccommodationById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(accomodationId) {
        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                return _context16.abrupt("return", _Queries["default"].checkAccommodationById(_models["default"].accomodation, accomodationId));

              case 1:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16);
      }));

      function checkAccommodationById(_x28) {
        return _checkAccommodationById.apply(this, arguments);
      }

      return checkAccommodationById;
    }()
    /**
    * get dated accommodations to that id
    * @param {integer} accommodationId accommodation id
    * @returns {array} data the data to be returned.
    */

  }, {
    key: "getRatedAccommodations",
    value: function () {
      var _getRatedAccommodations = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(accommodationId) {
        return _regenerator["default"].wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                return _context17.abrupt("return", _Queries["default"].getRatedAccommodations(_models["default"].accomodationRates, accommodationId));

              case 1:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17);
      }));

      function getRatedAccommodations(_x29) {
        return _getRatedAccommodations.apply(this, arguments);
      }

      return getRatedAccommodations;
    }()
    /**
     * This service get a booked accommodation that corresponds to user id and accomodation id
     * @param {Object} userid user id
     * @param {Object} accommodationid accomodation id
     * @returns {Object} user response
     */

  }, {
    key: "findIfAccomodationBooked",
    value: function () {
      var _findIfAccomodationBooked = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(userid, accommodationid) {
        var accommodatioBooked;
        return _regenerator["default"].wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.next = 2;
                return _Queries["default"].findIfAccomodationBooked(_models["default"].booking, userid, accommodationid);

              case 2:
                accommodatioBooked = _context18.sent;

                if (!accommodatioBooked) {
                  _context18.next = 5;
                  break;
                }

                return _context18.abrupt("return", accommodatioBooked);

              case 5:
                return _context18.abrupt("return", false);

              case 6:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18);
      }));

      function findIfAccomodationBooked(_x30, _x31) {
        return _findIfAccomodationBooked.apply(this, arguments);
      }

      return findIfAccomodationBooked;
    }()
    /**
    * creating of updating rate
    * @param {integer} accomodationId accommodation id
    * @param {Object} userId user id
    * @param {integer} rate rating value
    * @returns {array} data the data to be returned.
    */

  }, {
    key: "updateAccomodationRate",
    value: function () {
      var _updateAccomodationRate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19(accomodationId, userId, rate) {
        return _regenerator["default"].wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                return _context19.abrupt("return", _Queries["default"].updateAccomodationRate(_models["default"].accomodationRates, accomodationId, userId, rate));

              case 1:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19);
      }));

      function updateAccomodationRate(_x32, _x33, _x34) {
        return _updateAccomodationRate.apply(this, arguments);
      }

      return updateAccomodationRate;
    }()
    /**
    * Get updated ratings
    * @param {integer} accommodationId accommodation id
    * @param {Object} userId user id
    * @returns {array} data the data to be returned.
    */

  }, {
    key: "getAccommodationRate",
    value: function () {
      var _getAccommodationRate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20(accommodationId, userId) {
        return _regenerator["default"].wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                return _context20.abrupt("return", _Queries["default"].getAccommodationRate(_models["default"].accomodationRates, accommodationId, userId));

              case 1:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20);
      }));

      function getAccommodationRate(_x35, _x36) {
        return _getAccommodationRate.apply(this, arguments);
      }

      return getAccommodationRate;
    }()
    /**
    * Get average accommodation using accommodation id
    * @param {integer} accomodationId accommodation id
    * @returns {array} data the data to be returned.
    */

  }, {
    key: "getAverageRatings",
    value: function () {
      var _getAverageRatings = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee21(accomodationId) {
        return _regenerator["default"].wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                return _context21.abrupt("return", _Queries["default"].getAverageRatings(_models["default"].accomodation, accomodationId));

              case 1:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21);
      }));

      function getAverageRatings(_x37) {
        return _getAverageRatings.apply(this, arguments);
      }

      return getAverageRatings;
    }()
    /**
    * service to all accommodations in database by filtering 10 accommodations by page
    * @param {Object} limit accommodation request
    * @param {Object} offset accommodation for the page
    * @returns {Object} return accommodation message
    */

  }, {
    key: "getAccomodations",
    value: function () {
      var _getAccomodations = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee22(limit, offset) {
        var results;
        return _regenerator["default"].wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                _context22.prev = 0;
                _context22.next = 3;
                return _Queries["default"].getAllAccommodations(_models["default"].accomodation, limit, offset);

              case 3:
                results = _context22.sent;

                if (results) {
                  _context22.next = 6;
                  break;
                }

                return _context22.abrupt("return", null);

              case 6:
                return _context22.abrupt("return", results);

              case 9:
                _context22.prev = 9;
                _context22.t0 = _context22["catch"](0);
                return _context22.abrupt("return", undefined);

              case 12:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, null, [[0, 9]]);
      }));

      function getAccomodations(_x38, _x39) {
        return _getAccomodations.apply(this, arguments);
      }

      return getAccomodations;
    }()
    /**
    * service to all rooms in database by filtering 10 rooms by page
    * @param {integer} accomodationId accommodation id
    * @param {Object} limit room request
    * @param {Object} offset room for the page
    * @returns {Object} return room message
    */

  }, {
    key: "getRooms",
    value: function () {
      var _getRooms = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee23(accomodationId, limit, offset) {
        var results;
        return _regenerator["default"].wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                _context23.prev = 0;
                _context23.next = 3;
                return _Queries["default"].getAllRooms(_models["default"].rooms, {
                  accomodationId: accomodationId
                }, limit, offset);

              case 3:
                results = _context23.sent;

                if (results) {
                  _context23.next = 6;
                  break;
                }

                return _context23.abrupt("return", null);

              case 6:
                return _context23.abrupt("return", results);

              case 9:
                _context23.prev = 9;
                _context23.t0 = _context23["catch"](0);
                return _context23.abrupt("return", undefined);

              case 12:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, null, [[0, 9]]);
      }));

      function getRooms(_x40, _x41, _x42) {
        return _getRooms.apply(this, arguments);
      }

      return getRooms;
    }()
    /**
       * get all accommodation types
       * @returns { Object } accommodation types
       */

  }, {
    key: "getAccommodationType",
    value: function () {
      var _getAccommodationType = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee24() {
        var data;
        return _regenerator["default"].wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                _context24.next = 2;
                return _models["default"].accomodationtype.findAll();

              case 2:
                data = _context24.sent;
                return _context24.abrupt("return", data);

              case 4:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24);
      }));

      function getAccommodationType() {
        return _getAccommodationType.apply(this, arguments);
      }

      return getAccommodationType;
    }()
    /**
    * service to all location name by location id
    * @param {integer} locationId Location id
    * @returns {Object} return accommodation message
    */

  }, {
    key: "getLocationNameById",
    value: function () {
      var _getLocationNameById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee25(locationId) {
        return _regenerator["default"].wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                return _context25.abrupt("return", _Queries["default"].getLocationNameById(_models["default"].locations, locationId));

              case 1:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25);
      }));

      function getLocationNameById(_x43) {
        return _getLocationNameById.apply(this, arguments);
      }

      return getLocationNameById;
    }()
    /**
       * get all accommodation's room types
       * @param { integer } accomodationId Location id
       * @returns { Object } accommodation types
       */

  }, {
    key: "getAccommodationRoomType",
    value: function () {
      var _getAccommodationRoomType = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee26(accomodationId) {
        var data;
        return _regenerator["default"].wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                _context26.next = 2;
                return _models["default"].sequelize.query("SELECT DISTINCT(t.name),rooms.\"accomodationId\",t.id as typeId\n    FROM rooms\n    INNER JOIN accomodationtypes t ON t.id=rooms.\"typeId\"\n    WHERE rooms.\"accomodationId\"=".concat(accomodationId), {
                  type: _models["default"].sequelize.QueryTypes.SELECT
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

      function getAccommodationRoomType(_x44) {
        return _getAccommodationRoomType.apply(this, arguments);
      }

      return getAccommodationRoomType;
    }()
  }]);
  return accommodationService;
}();

var _default = accommodationService;
exports["default"] = _default;