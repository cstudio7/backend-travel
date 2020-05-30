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

var _accomodation = _interopRequireDefault(require("../services/accomodation.service"));

var _accomodation2 = _interopRequireDefault(require("../helpers/accomodation.helper"));

var _image = _interopRequireDefault(require("../services/image.services"));

var _room = _interopRequireDefault(require("../services/room.services"));

var _comment = _interopRequireDefault(require("../services/comment.service"));

var _paginate = _interopRequireDefault(require("../helpers/paginate.helper"));

/**
* Class for Travel administrator and supplier to deal with Accommodation
*/
var Accommodation = /*#__PURE__*/function () {
  function Accommodation() {
    (0, _classCallCheck2["default"])(this, Accommodation);
  }

  (0, _createClass2["default"])(Accommodation, null, [{
    key: "createAccomodation",

    /**
     * This function helps to create new accomodation
     * @param {Object} req request
     * @param {*} res response
     * @returns {Object} return accommodation response
     */
    value: function () {
      var _createAccomodation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var _req$body, accommodationName, description, locationId, category, owner, images, rooms, services, amenities, newAccomodation, createdAccommodation, accomodationId, accommodationImages, accommodationRooms, accommodationServices, accommodationAmenities, data;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _req$body = req.body, accommodationName = _req$body.accommodationName, description = _req$body.description, locationId = _req$body.locationId, category = _req$body.category, owner = _req$body.owner, images = _req$body.images, rooms = _req$body.rooms, services = _req$body.services, amenities = _req$body.amenities;
                newAccomodation = {
                  name: accommodationName,
                  description: description,
                  locationId: locationId,
                  category: category,
                  owner: owner
                };
                _context.next = 4;
                return _accomodation["default"].createAccomodation(newAccomodation);

              case 4:
                createdAccommodation = _context.sent;
                accomodationId = createdAccommodation.dataValues.id;
                _context.next = 8;
                return _accomodation2["default"].saveImages(images, accomodationId).then(function (data) {
                  return data;
                });

              case 8:
                accommodationImages = _context.sent;
                _context.next = 11;
                return _accomodation2["default"].createRooms(rooms, accomodationId).then(function (data) {
                  return data;
                });

              case 11:
                accommodationRooms = _context.sent;
                _context.next = 14;
                return _accomodation2["default"].createAccommodationServices(services, accomodationId).then(function (data) {
                  return data;
                });

              case 14:
                accommodationServices = _context.sent;
                _context.next = 17;
                return _accomodation2["default"].createAccommodationAmenities(amenities, accomodationId).then(function (data) {
                  return data;
                });

              case 17:
                accommodationAmenities = _context.sent;
                data = {
                  createdAccommodation: createdAccommodation,
                  accommodationImages: accommodationImages,
                  accommodationRooms: accommodationRooms,
                  accommodationServices: accommodationServices,
                  accommodationAmenities: accommodationAmenities
                };
                return _context.abrupt("return", _response["default"].successMessage(res, 'accommodation is successfully created', 201, data));

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function createAccomodation(_x, _x2) {
        return _createAccomodation.apply(this, arguments);
      }

      return createAccomodation;
    }()
    /**
     * This function helps to get an accomodation
     * @param {Object} req request
     * @param {*} res response
     * @returns {Object} return user response
     */

  }, {
    key: "getAccomodation",
    value: function () {
      var _getAccomodation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var accomodationId, accommodations, accommodationImages, accommodationRooms, accommodationServices, accommodationAmenities, data;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                accomodationId = req.params.accomodationId;
                _context2.next = 3;
                return _accomodation["default"].getAccomodation(accomodationId);

              case 3:
                accommodations = _context2.sent;
                _context2.next = 6;
                return _image["default"].findImages(accomodationId);

              case 6:
                accommodationImages = _context2.sent;
                _context2.next = 9;
                return _room["default"].findRooms(accomodationId);

              case 9:
                accommodationRooms = _context2.sent;
                _context2.next = 12;
                return _accomodation["default"].getAccomodationServices(accomodationId);

              case 12:
                accommodationServices = _context2.sent;
                _context2.next = 15;
                return _accomodation["default"].getAccomodationAmenities(accomodationId);

              case 15:
                accommodationAmenities = _context2.sent;
                data = {
                  accommodations: accommodations,
                  accommodationImages: accommodationImages,
                  accommodationRooms: accommodationRooms,
                  accommodationServices: accommodationServices,
                  accommodationAmenities: accommodationAmenities
                };
                return _context2.abrupt("return", _response["default"].successMessage(res, 'accommodation data', 201, data));

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getAccomodation(_x3, _x4) {
        return _getAccomodation.apply(this, arguments);
      }

      return getAccomodation;
    }()
    /**
     * This function helps to get all accomodations
     * @param {Object} req request
     * @param {*} res response
     * @returns {Object} return user response
     */

  }, {
    key: "getAllAccomodation",
    value: function () {
      var _getAllAccomodation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var page, limit, offset, Accomodations;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                page = req.query.page;
                limit = 10;
                offset = (0, _paginate["default"])(page, limit);
                _context3.next = 6;
                return _accomodation["default"].getAccomodations(limit, offset);

              case 6:
                Accomodations = _context3.sent;

                if (!(Accomodations.count > offset)) {
                  _context3.next = 9;
                  break;
                }

                return _context3.abrupt("return", _response["default"].successMessage(res, 'Accomodations', 200, Accomodations));

              case 9:
                return _context3.abrupt("return", _response["default"].errorMessage(res, 'No Accomodation', 404));

              case 12:
                _context3.prev = 12;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", _response["default"].errorMessage(res, _context3.t0.message, 500));

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 12]]);
      }));

      function getAllAccomodation(_x5, _x6) {
        return _getAllAccomodation.apply(this, arguments);
      }

      return getAllAccomodation;
    }()
    /**
     * This function helps to get all rooms
     * @param {Object} req request
     * @param {*} res response
     * @returns {Object} return user response
     */

  }, {
    key: "getAllRooms",
    value: function () {
      var _getAllRooms = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var page, accomodationId, limit, offset, rooms;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                page = req.query.page;
                accomodationId = req.params.accomodationId;
                limit = 10;
                offset = (0, _paginate["default"])(page, limit);
                _context4.next = 7;
                return _accomodation["default"].getRooms(accomodationId, limit, offset);

              case 7:
                rooms = _context4.sent;

                if (!(rooms.count > offset)) {
                  _context4.next = 10;
                  break;
                }

                return _context4.abrupt("return", _response["default"].successMessage(res, 'rooms', 200, rooms));

              case 10:
                return _context4.abrupt("return", _response["default"].errorMessage(res, 'No Rooms', 404));

              case 13:
                _context4.prev = 13;
                _context4.t0 = _context4["catch"](0);
                return _context4.abrupt("return", _response["default"].errorMessage(res, _context4.t0.message, 500));

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 13]]);
      }));

      function getAllRooms(_x7, _x8) {
        return _getAllRooms.apply(this, arguments);
      }

      return getAllRooms;
    }()
    /**
     * This function helps to get all accommodation types
     * @param {Object} req request
     * @param {*} res response
     * @returns {Object} return  response
     */

  }, {
    key: "getAllAccommodationTypes",
    value: function () {
      var _getAllAccommodationTypes = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var AccommodationTypes;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _accomodation["default"].getAccommodationType();

              case 3:
                AccommodationTypes = _context5.sent;
                return _context5.abrupt("return", _response["default"].successMessage(res, 'all accommodation types', 200, AccommodationTypes));

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](0);
                return _context5.abrupt("return", _response["default"].errorMessage(res, _context5.t0.message, 500));

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 7]]);
      }));

      function getAllAccommodationTypes(_x9, _x10) {
        return _getAllAccommodationTypes.apply(this, arguments);
      }

      return getAllAccommodationTypes;
    }()
    /**
       * This method create a comment
       * @param {Object} req request data
       * @param {Object} res response data
       * @returns { Object} return a user message
       */

  }, {
    key: "createAccomodationComment",
    value: function () {
      var _createAccomodationComment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
        var subjectType;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                subjectType = 'Accommodation';
                _context6.next = 3;
                return _comment["default"].createComment(req, res, subjectType);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function createAccomodationComment(_x11, _x12) {
        return _createAccomodationComment.apply(this, arguments);
      }

      return createAccomodationComment;
    }()
    /**
    *
    * This method will help to view all
    * comments
    * @param {Object} req user request data
    * @param {Object} res user response data
    * @returns { Object} return a user message
    */

  }, {
    key: "getAccommodationComments",
    value: function () {
      var _getAccommodationComments = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
        var subjectType;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                subjectType = 'Accommodation';
                _context7.next = 3;
                return _comment["default"].getAllCommets(req, res, subjectType);

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function getAccommodationComments(_x13, _x14) {
        return _getAccommodationComments.apply(this, arguments);
      }

      return getAccommodationComments;
    }()
    /**
         * This method help to delete a comment
         * @param { Object } req request
         * @param { Object } res response
         * @returns { Object } user respose as object
         */

  }, {
    key: "deleteAccommodationComment",
    value: function () {
      var _deleteAccommodationComment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return _comment["default"].deleteComment(req, res);

              case 2:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function deleteAccommodationComment(_x15, _x16) {
        return _deleteAccommodationComment.apply(this, arguments);
      }

      return deleteAccommodationComment;
    }()
    /**
     * Book an accommodation facility
     * @param {Object} req The request object
     * @param {Object} res The response object
     * @returns {Promise} res
     */

  }, {
    key: "bookAccommodation",
    value: function () {
      var _bookAccommodation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
        var query;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return _accomodation["default"].bookAccommodation(req.user.id, req.body.accommodationId, req.body.roomId, req.body.departureDate, req.body.checkoutDate);

              case 2:
                query = _context9.sent;
                return _context9.abrupt("return", _response["default"].successMessage(res, 'Booking was successfully processed', 201, query));

              case 4:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function bookAccommodation(_x17, _x18) {
        return _bookAccommodation.apply(this, arguments);
      }

      return bookAccommodation;
    }()
    /**
     * Like an accommodation
     * @param {Object} req The request object
     * @param {Object} res The response object
     * @returns {Promise} res
     */

  }, {
    key: "likeOrUnlike",
    value: function () {
      var _likeOrUnlike = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
        var query, likeOrUnlike;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return _accomodation["default"].likeOrUnlike(req.body.isLike, req.user.id, req.params.accommodationId);

              case 2:
                query = _context10.sent;
                likeOrUnlike = req.body.isLike ? 'Like' : 'Unlike';
                return _context10.abrupt("return", _response["default"].successMessage(res, "".concat(likeOrUnlike, " has successfully done"), 200, query));

              case 5:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function likeOrUnlike(_x19, _x20) {
        return _likeOrUnlike.apply(this, arguments);
      }

      return likeOrUnlike;
    }()
    /**
     * Has user liked or unliked an accommodation
     * @param {Object} req The request object
     * @param {Object} res The response object
     * @returns {Promise} res
     */

  }, {
    key: "checkIfUserLikedOrUnlikedAccommodation",
    value: function () {
      var _checkIfUserLikedOrUnlikedAccommodation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
        var query;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                query = null;
                _context11.next = 3;
                return _accomodation["default"].findIfUserAlreadLiked(req.user.id, req.params.accommodationId);

              case 3:
                query = _context11.sent;

                if (!query) {
                  query = {
                    like: false,
                    dislike: false
                  };
                }

                return _context11.abrupt("return", _response["default"].successMessage(res, 'User status on liking or unliking an accommodation', 200, query));

              case 6:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      function checkIfUserLikedOrUnlikedAccommodation(_x21, _x22) {
        return _checkIfUserLikedOrUnlikedAccommodation.apply(this, arguments);
      }

      return checkIfUserLikedOrUnlikedAccommodation;
    }()
    /**
     * This function helps user to rate accommodation which he booked.
     * @param {Object} req request
     * @param {*} res response
     * @returns {Object} return accommodation response
     */

  }, {
    key: "rateAccomodation",
    value: function () {
      var _rateAccomodation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(req, res) {
        var rate, userId, accommodationId, rateData, ratedAccommodation, ratings, sum, averageRate, average;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.prev = 0;
                rate = req.body.rate;
                userId = req.user.id;
                accommodationId = req.params.accommodationId;
                rateData = {
                  rate: rate,
                  userId: userId,
                  accommodationId: accommodationId
                };
                _context12.next = 7;
                return _accomodation["default"].CreateAccomodationRate(rateData);

              case 7:
                ratedAccommodation = _context12.sent;
                _context12.next = 10;
                return _accomodation2["default"].getRateValues(accommodationId);

              case 10:
                ratings = _context12.sent;
                sum = ratings.reduce(function (total, amount) {
                  return total + amount;
                });
                averageRate = sum / ratings.length;
                average = averageRate.toFixed(3);
                _context12.next = 16;
                return _accomodation["default"].updateAverageRate(accommodationId, average);

              case 16:
                return _context12.abrupt("return", _response["default"].successMessage(res, 'You rated this accomodation successfully', 201, ratedAccommodation));

              case 19:
                _context12.prev = 19;
                _context12.t0 = _context12["catch"](0);
                return _context12.abrupt("return", _response["default"].errorMessage(res, _context12.t0.message, 500));

              case 22:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, null, [[0, 19]]);
      }));

      function rateAccomodation(_x23, _x24) {
        return _rateAccomodation.apply(this, arguments);
      }

      return rateAccomodation;
    }()
    /**
     * This function helps user to update accommodation rate.
     * @param {Object} req request
     * @param {*} res response
     * @returns {Object} return accommodation response
     */

  }, {
    key: "updateAccomodationRate",
    value: function () {
      var _updateAccomodationRate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(req, res) {
        var rate, userId, accommodationId, rateData, ratings, sum, averageRate, average;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.prev = 0;
                rate = req.body.rate;
                userId = req.user.id;
                accommodationId = req.params.subjectID;
                _context13.next = 6;
                return _accomodation["default"].updateAccomodationRate(accommodationId, userId, rate);

              case 6:
                rateData = {
                  rate: rate
                };
                _context13.next = 9;
                return _accomodation2["default"].getRateValues(accommodationId);

              case 9:
                ratings = _context13.sent;
                sum = ratings.reduce(function (total, amount) {
                  return total + amount;
                });
                averageRate = sum / ratings.length;
                average = averageRate.toFixed(3);
                _context13.next = 15;
                return _accomodation["default"].updateAverageRate(accommodationId, average);

              case 15:
                return _context13.abrupt("return", _response["default"].successMessage(res, 'Rate was updated successfully', 200, rateData));

              case 18:
                _context13.prev = 18;
                _context13.t0 = _context13["catch"](0);
                return _context13.abrupt("return", _response["default"].errorMessage(res, _context13.t0.message, 500));

              case 21:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, null, [[0, 18]]);
      }));

      function updateAccomodationRate(_x25, _x26) {
        return _updateAccomodationRate.apply(this, arguments);
      }

      return updateAccomodationRate;
    }()
    /**
     * This function helps user to get accommodation rate
     * @param {Object} req request
     * @param {*} res response
     * @returns {Object} return accommodation response
     */

  }, {
    key: "getAccommodationRate",
    value: function () {
      var _getAccommodationRate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(req, res) {
        var userId, accommodationId, accommodationRate;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.prev = 0;
                userId = req.user.id;
                accommodationId = req.params.accommodationId;
                _context14.next = 5;
                return _accomodation["default"].getAccommodationRate(accommodationId, userId);

              case 5:
                accommodationRate = _context14.sent;

                if (accommodationRate) {
                  _context14.next = 8;
                  break;
                }

                return _context14.abrupt("return", _response["default"].errorMessage(res, 'Rating not found', 404));

              case 8:
                return _context14.abrupt("return", _response["default"].successMessage(res, 'Accommodation rate', 201, accommodationRate));

              case 11:
                _context14.prev = 11;
                _context14.t0 = _context14["catch"](0);
                return _context14.abrupt("return", _response["default"].errorMessage(res, _context14.t0.message, 500));

              case 14:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, null, [[0, 11]]);
      }));

      function getAccommodationRate(_x27, _x28) {
        return _getAccommodationRate.apply(this, arguments);
      }

      return getAccommodationRate;
    }()
    /**
     * This function helps user to rate accommodation which he booked.
     * @param {Object} req request
     * @param {*} res response
     * @returns {Object} return accommodation response
     */

  }, {
    key: "getAverageRatings",
    value: function () {
      var _getAverageRatings = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(req, res) {
        var accommodationId, ratingsAverage, average;
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.prev = 0;
                accommodationId = req.params.subjectID || req.params.accommodationId;
                _context15.next = 4;
                return _accomodation["default"].getAverageRatings(accommodationId);

              case 4:
                ratingsAverage = _context15.sent;

                if (ratingsAverage[0].averageRate === null || ratingsAverage[0].averageRate === 0) {
                  average = 0;
                } else {
                  average = ratingsAverage[0].averageRate;
                }

                return _context15.abrupt("return", _response["default"].successMessage(res, 'The average rate of this accommodation', 200, {
                  average: average
                }));

              case 9:
                _context15.prev = 9;
                _context15.t0 = _context15["catch"](0);
                return _context15.abrupt("return", _response["default"].errorMessage(res, _context15.t0.message, 500));

              case 12:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, null, [[0, 9]]);
      }));

      function getAverageRatings(_x29, _x30) {
        return _getAverageRatings.apply(this, arguments);
      }

      return getAverageRatings;
    }()
    /**
     * This function helps to get accomodations located in user destination
     * @param {Object} req request
     * @param {*} res response
     * @returns {Object} return user response
     */

  }, {
    key: "getAccomodationsByDestination",
    value: function () {
      var _getAccomodationsByDestination = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(req, res) {
        var userDestination, destinaton, accommodations, accommodationDetails;
        return _regenerator["default"].wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                userDestination = req.params.userDestination;
                destinaton = parseInt(userDestination, 10);
                _context17.next = 4;
                return _accomodation["default"].findAccomodationByCity(destinaton);

              case 4:
                accommodations = _context17.sent;
                accommodationDetails = [];
                _context17.next = 8;
                return Promise.all(accommodations.map( /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(accomodation) {
                    var id, name, availableRooms, averageRate, accommodationImages, indexImageUrl, firstImage;
                    return _regenerator["default"].wrap(function _callee16$(_context16) {
                      while (1) {
                        switch (_context16.prev = _context16.next) {
                          case 0:
                            id = accomodation.id, name = accomodation.name, availableRooms = accomodation.availableRooms, averageRate = accomodation.averageRate;
                            _context16.next = 3;
                            return _image["default"].findImages(id);

                          case 3:
                            accommodationImages = _context16.sent;
                            indexImageUrl = accommodationImages.map(function (image) {
                              var imageUrl = image.imageUrl;
                              return imageUrl;
                            });
                            firstImage = indexImageUrl[0];
                            accommodationDetails.push({
                              id: id,
                              name: name,
                              availableRooms: availableRooms,
                              averageRate: averageRate,
                              firstImage: firstImage
                            });

                          case 7:
                          case "end":
                            return _context16.stop();
                        }
                      }
                    }, _callee16);
                  }));

                  return function (_x33) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 8:
                return _context17.abrupt("return", _response["default"].successMessage(res, 'accommodation data', 201, accommodationDetails));

              case 9:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17);
      }));

      function getAccomodationsByDestination(_x31, _x32) {
        return _getAccomodationsByDestination.apply(this, arguments);
      }

      return getAccomodationsByDestination;
    }()
    /**
     * This function helps to get accomodation's room types
     * @param {Object} req request
     * @param {*} res response
     * @returns {Object} return user response
     */

  }, {
    key: "getAccomodationRoomsType",
    value: function () {
      var _getAccomodationRoomsType = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(req, res) {
        var accommodations;
        return _regenerator["default"].wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.prev = 0;
                _context18.next = 3;
                return _accomodation["default"].getAccommodationRoomType(req.params.accommodationId);

              case 3:
                accommodations = _context18.sent;
                return _context18.abrupt("return", _response["default"].successMessage(res, 'all accommodation types', 200, accommodations));

              case 7:
                _context18.prev = 7;
                _context18.t0 = _context18["catch"](0);
                return _context18.abrupt("return", _response["default"].errorMessage(res, _context18.t0.message, 500));

              case 10:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, null, [[0, 7]]);
      }));

      function getAccomodationRoomsType(_x34, _x35) {
        return _getAccomodationRoomsType.apply(this, arguments);
      }

      return getAccomodationRoomsType;
    }()
  }]);
  return Accommodation;
}();

var _default = Accommodation;
exports["default"] = _default;