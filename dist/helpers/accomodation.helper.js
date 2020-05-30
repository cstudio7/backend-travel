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

var _user = _interopRequireDefault(require("../services/user.service"));

var _location = _interopRequireDefault(require("../services/location.services"));

var _accomodation = _interopRequireDefault(require("../services/accomodation.service"));

var _room = _interopRequireDefault(require("../services/room.services"));

var _image = _interopRequireDefault(require("../services/image.services"));

/**
 * all trip helpers
 */
var Accomodation = /*#__PURE__*/function () {
  function Accomodation() {
    (0, _classCallCheck2["default"])(this, Accomodation);
  }

  (0, _createClass2["default"])(Accomodation, null, [{
    key: "checkAccomodationAvailability",

    /**
     * This method helps to validate accomodation and
     *  it check if accomodation exist in database and  also if it exist
     * in destination area using accomodation id
     * @param {Object} req user request
     * @param {Object} res user response
     * @param {Object} next next to the middleware chain
     * @returns { Object} return user response
     */
    value: function () {
      var _checkAccomodationAvailability = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req) {
        var _yield$UserServices$f, id;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _user["default"].findUserByEmail(req.user.email);

              case 2:
                _yield$UserServices$f = _context2.sent;
                id = _yield$UserServices$f.id;
                req.user.id = id;
                _context2.next = 7;
                return Promise.all(req.body.map( /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(trip, index) {
                    var accomodation, accomodationLocation;
                    return _regenerator["default"].wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return _accomodation["default"].findAccomodation(trip.accomodationId);

                          case 2:
                            accomodation = _context.sent;

                            if (!accomodation.dataValues) {
                              _context.next = 10;
                              break;
                            }

                            _context.next = 6;
                            return _location["default"].findLocation(accomodation.dataValues.locationId);

                          case 6:
                            accomodationLocation = _context.sent;

                            if (accomodationLocation.dataValues.id !== req.body[index].To) {
                              req.errorMessage = "Accomodation does not exist on destination area check trip number ".concat(index + 1);
                              req.errorStatus = 404;
                            }

                            _context.next = 12;
                            break;

                          case 10:
                            req.errorMessage = "Accomodation not found check trip number ".concat(index + 1);
                            req.errorStatus = 404;

                          case 12:
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

              case 7:
                return _context2.abrupt("return", id);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function checkAccomodationAvailability(_x) {
        return _checkAccomodationAvailability.apply(this, arguments);
      }

      return checkAccomodationAvailability;
    }()
    /**
     * This function helps to save set of images information
     * @param { Array } images images of accomodation
     * @param { Integer } accomodationId id of accomodation
     * @returns {Object} return created Accommodation Images
     */

  }, {
    key: "saveImages",
    value: function () {
      var _saveImages = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(images, accomodationId) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", Promise.all(images.map( /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(image) {
                    var imageUrl, newImage, savedImage, data;
                    return _regenerator["default"].wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            imageUrl = image.imageUrl;
                            newImage = {
                              recordId: accomodationId,
                              imageType: 'accomodation',
                              imageUrl: imageUrl
                            };
                            _context3.next = 4;
                            return _image["default"].saveImage(newImage);

                          case 4:
                            savedImage = _context3.sent;
                            data = savedImage.dataValues;
                            return _context3.abrupt("return", data);

                          case 7:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x6) {
                    return _ref2.apply(this, arguments);
                  };
                }())));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function saveImages(_x4, _x5) {
        return _saveImages.apply(this, arguments);
      }

      return saveImages;
    }()
    /**
      * This function helps to create set of rooms information
      * @param { Array } rooms rooms of accomodation
      * @param { Integer } accomodationId id of accomodation
      * @returns {Object} return created Accommodation Rooms
      */

  }, {
    key: "createRooms",
    value: function () {
      var _createRooms = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(rooms, accomodationId) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", Promise.all(rooms.map( /*#__PURE__*/function () {
                  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(room) {
                    var numberOfRoom, typeId, price, currency, roomTypeImageUrl, newRoom, makeRepeated, roomsData, createdRooms, newImage, roomTypeImage, data;
                    return _regenerator["default"].wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            numberOfRoom = room.numberOfRoom, typeId = room.typeId, price = room.price, currency = room.currency, roomTypeImageUrl = room.roomTypeImageUrl;
                            newRoom = {
                              accomodationId: accomodationId,
                              typeId: typeId,
                              price: price,
                              status: 'available',
                              currency: currency
                            };

                            makeRepeated = function makeRepeated(arr, repeats) {
                              return Array.from({
                                length: repeats
                              }, function () {
                                return arr;
                              }).flat();
                            };

                            roomsData = makeRepeated([newRoom], numberOfRoom);
                            _context5.next = 6;
                            return _room["default"].createRoom(roomsData);

                          case 6:
                            createdRooms = _context5.sent;
                            _context5.next = 9;
                            return _accomodation["default"].updateAccommodationNumberOfRooms(accomodationId, numberOfRoom);

                          case 9:
                            newImage = {
                              recordId: accomodationId,
                              imageType: "roomType ".concat(typeId),
                              imageUrl: roomTypeImageUrl
                            };
                            _context5.next = 12;
                            return _image["default"].saveImage(newImage);

                          case 12:
                            roomTypeImage = _context5.sent;
                            roomTypeImage = roomTypeImage.dataValues;
                            data = {
                              createdRooms: createdRooms,
                              roomTypeImage: roomTypeImage
                            };
                            return _context5.abrupt("return", data);

                          case 16:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x9) {
                    return _ref3.apply(this, arguments);
                  };
                }())));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function createRooms(_x7, _x8) {
        return _createRooms.apply(this, arguments);
      }

      return createRooms;
    }()
    /**
     * This function helps to create services of accommodation
     * @param { Array } services services of accomodation
     * @param { Integer } accomodationId id of accomodation
     * @returns {Object} return data of Accommodation services
     */

  }, {
    key: "createAccommodationServices",
    value: function () {
      var _createAccommodationServices = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(services, accomodationId) {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", Promise.all(services.map( /*#__PURE__*/function () {
                  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(service) {
                    var serviceName, newServices, createdServices, data;
                    return _regenerator["default"].wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            serviceName = service.serviceName;
                            newServices = {
                              name: serviceName,
                              accomodationId: accomodationId
                            };
                            _context7.next = 4;
                            return _accomodation["default"].createAccommodationService(newServices);

                          case 4:
                            createdServices = _context7.sent;
                            data = createdServices.dataValues;
                            return _context7.abrupt("return", data);

                          case 7:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _callee7);
                  }));

                  return function (_x12) {
                    return _ref4.apply(this, arguments);
                  };
                }())));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function createAccommodationServices(_x10, _x11) {
        return _createAccommodationServices.apply(this, arguments);
      }

      return createAccommodationServices;
    }()
    /**
     * This function helps to create amenities of accommodation
     * @param { Array } amenities amenities of accomodation
     * @param { Integer } accomodationId id of accomodation
     * @returns {Object} return created Accommodation amenities
     */

  }, {
    key: "createAccommodationAmenities",
    value: function () {
      var _createAccommodationAmenities = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(amenities, accomodationId) {
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", Promise.all(amenities.map( /*#__PURE__*/function () {
                  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(amenity) {
                    var amenityName, newAmenity, createdAmenities, data;
                    return _regenerator["default"].wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            amenityName = amenity.amenityName;
                            newAmenity = {
                              name: amenityName,
                              accomodationId: accomodationId
                            };
                            _context9.next = 4;
                            return _accomodation["default"].createAccommodationAmenity(newAmenity);

                          case 4:
                            createdAmenities = _context9.sent;
                            data = createdAmenities.dataValues;
                            return _context9.abrupt("return", data);

                          case 7:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    }, _callee9);
                  }));

                  return function (_x15) {
                    return _ref5.apply(this, arguments);
                  };
                }())));

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function createAccommodationAmenities(_x13, _x14) {
        return _createAccommodationAmenities.apply(this, arguments);
      }

      return createAccommodationAmenities;
    }()
    /**
     * This function helps to get rates on a certain accommodation id
     * @param { Integer } accommodationId id of accomodation
     * @returns {Arrat} return array of rated values on that ceratain accommodation
     */

  }, {
    key: "getRateValues",
    value: function () {
      var _getRateValues = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(accommodationId) {
        var accommodationsRated, rates;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return _accomodation["default"].getRatedAccommodations(accommodationId);

              case 2:
                accommodationsRated = _context11.sent;
                rates = [];
                accommodationsRated.map(function (accomodation, index) {
                  rates.push(accommodationsRated[index].rate);
                  return 0;
                });
                return _context11.abrupt("return", rates);

              case 6:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      function getRateValues(_x16) {
        return _getRateValues.apply(this, arguments);
      }

      return getRateValues;
    }()
  }]);
  return Accomodation;
}();

var _default = Accomodation;
exports["default"] = _default;