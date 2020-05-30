"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _faker = _interopRequireDefault(require("faker"));

var _dotenv = require("dotenv");

var _trip = _interopRequireDefault(require("../services/trip.services"));

var _user = _interopRequireDefault(require("../services/user.service"));

var _request = _interopRequireDefault(require("../services/request.services"));

var _response = _interopRequireDefault(require("../helpers/response.helper"));

var _userManagement = _interopRequireDefault(require("../services/user-management.services"));

var _paginate = _interopRequireDefault(require("../helpers/paginate.helper"));

var _notification = _interopRequireDefault(require("../services/notification.service"));

var _comment = _interopRequireDefault(require("../services/comment.service"));

var _models = _interopRequireDefault(require("../database/models"));

(0, _dotenv.config)();
/**
* Class for users to create trip
*/

var TripController = /*#__PURE__*/function () {
  function TripController() {
    (0, _classCallCheck2["default"])(this, TripController);
  }

  (0, _createClass2["default"])(TripController, null, [{
    key: "combineTripsConctroller",

    /**
     * This controller helps to know the type of trip
     * sothat it can redirect the request to a tageted controller
     * @param {Object} req request
     * @param {*} res response
     * @returns {Object} return user response
     */
    value: function () {
      var _combineTripsConctroller = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var body;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                body = Object.prototype.toString.call(req.body);

                if (!(body === '[object Array]')) {
                  _context.next = 6;
                  break;
                }

                _context.next = 4;
                return TripController.multiCityTripRequest(req, res);

              case 4:
                _context.next = 8;
                break;

              case 6:
                _context.next = 8;
                return TripController.requestTrip(req, res);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function combineTripsConctroller(_x, _x2) {
        return _combineTripsConctroller.apply(this, arguments);
      }

      return combineTripsConctroller;
    }()
    /**
     * user create a trip and is saved in the database
     * @param {Object} req The request object
     * @param {Object} res The response object
     * @returns {Object} A user object with selected field
     */

  }, {
    key: "requestTrip",
    value: function () {
      var _requestTrip = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var tripid, status, type, createdTrip, tripId, userId, userManager, managerId, requestData, tripRequest;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                tripid = _faker["default"].random.uuid();
                status = 'pending';
                type = req.body.type;
                _context2.next = 6;
                return _trip["default"].CreateTrip(req, req.body, tripid, type);

              case 6:
                createdTrip = _context2.sent;
                tripId = createdTrip.tripId;
                userId = req.user.id;
                _context2.next = 11;
                return _user["default"].findUserManager(userId);

              case 11:
                userManager = _context2.sent;
                managerId = userManager[0].managerId;
                requestData = {
                  tripId: tripId,
                  userId: userId,
                  managerId: managerId,
                  status: status
                };
                _context2.next = 16;
                return _trip["default"].CreateTripRequest(requestData);

              case 16:
                tripRequest = _context2.sent;
                _context2.next = 19;
                return _notification["default"].sendNotification('trip_request_event', managerId, "New ".concat(type, " trip request."), "".concat(req.user.firstName, " has requested a new ").concat(type), tripRequest.id, "".concat(process.env.BASE_URL, "/api/v1/trip-requests/").concat(tripId, "/").concat(req.user.token));

              case 19:
                return _context2.abrupt("return", _response["default"].successMessage(res, 'Trip created successfully', 201, createdTrip));

              case 22:
                _context2.prev = 22;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", _response["default"].errorMessage(res, _context2.t0.message, 500));

              case 25:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 22]]);
      }));

      function requestTrip(_x3, _x4) {
        return _requestTrip.apply(this, arguments);
      }

      return requestTrip;
    }()
    /**
     * This controller will help a user to creates multiple sity trip
     * and he or she will input multiple tips as objects inside an array.
     * @param {Object} req The request object
     * @param {Object} res The response object
     * @returns {Object} A user object with selected fields
     */

  }, {
    key: "multiCityTripRequest",
    value: function () {
      var _multiCityTripRequest = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var GeneralTripId, trips, result, manager, data, createdtrip;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                GeneralTripId = _faker["default"].random.uuid();
                trips = [];
                _context4.prev = 2;
                _context4.next = 5;
                return Promise.all(req.body.map( /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(trip) {
                    var newTrip;
                    return _regenerator["default"].wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return _trip["default"].CreateMultiCityTrip(req, trip, GeneralTripId, 'multi-city');

                          case 2:
                            newTrip = _context3.sent;
                            trips.push(newTrip);

                          case 4:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x7) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 5:
                if (!(trips.length > 0)) {
                  _context4.next = 13;
                  break;
                }

                _context4.next = 8;
                return _userManagement["default"].findManagerByUserId(req.user.id);

              case 8:
                manager = _context4.sent;
                data = {
                  userId: req.user.id,
                  managerId: manager,
                  tripId: GeneralTripId,
                  status: 'pending'
                };
                _context4.next = 12;
                return _trip["default"].CreateMultiCityTripRequest(data);

              case 12:
                result = _context4.sent;

              case 13:
                if (result) {
                  _context4.next = 15;
                  break;
                }

                return _context4.abrupt("return", _response["default"].errorMessage(res, 'trip request has failed please try again', 500));

              case 15:
                _context4.next = 17;
                return _trip["default"].getTripByTripId(GeneralTripId);

              case 17:
                createdtrip = _context4.sent;
                return _context4.abrupt("return", _response["default"].successMessage(res, 'Trip successfully created ', 201, createdtrip));

              case 21:
                _context4.prev = 21;
                _context4.t0 = _context4["catch"](2);
                return _context4.abrupt("return", _response["default"].errorMessage(res, _context4.t0.message, 500));

              case 24:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[2, 21]]);
      }));

      function multiCityTripRequest(_x5, _x6) {
        return _multiCityTripRequest.apply(this, arguments);
      }

      return multiCityTripRequest;
    }()
    /** Function to approve the trip request and return the updated trip request
     *
     * @param {object} req the request we send to the server
     * @param {object} res the response we get from the server
     * @returns {object} data updated
     */

  }, {
    key: "updateTripRequestStatus",
    value: function () {
      var _updateTripRequestStatus = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var tripRequestId, status, changedStatus, _yield$tripRequestSer, _yield$tripRequestSer2, updateTripRequestStatus;

        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                tripRequestId = req.params.tripRequestId;
                status = req.body.status;
                changedStatus = {
                  status: status
                };
                _context5.next = 5;
                return _request["default"].updateTripRequestStatus(changedStatus, tripRequestId);

              case 5:
                _yield$tripRequestSer = _context5.sent;
                _yield$tripRequestSer2 = (0, _slicedToArray2["default"])(_yield$tripRequestSer, 2);
                updateTripRequestStatus = _yield$tripRequestSer2[1];
                _context5.next = 10;
                return _notification["default"].sendNotification('approve-or-reject-trip_request_event', updateTripRequestStatus[0].userId, "New ".concat(status, " request trip"), "Your manager has ".concat(status, " your trip request"), updateTripRequestStatus[0].id, "".concat(process.env.BASE_URL, "/api/v1/trip-requests/").concat(updateTripRequestStatus[0].tripId, "/").concat(req.user.token));

              case 10:
                return _context5.abrupt("return", _response["default"].successMessage.apply(_response["default"], [res, "Trip request has been ".concat(status, " successfully"), 200].concat((0, _toConsumableArray2["default"])(updateTripRequestStatus))));

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function updateTripRequestStatus(_x8, _x9) {
        return _updateTripRequestStatus.apply(this, arguments);
      }

      return updateTripRequestStatus;
    }()
    /**
     * user will recieve all requests he/she  made and data is retrieved from the database
     * @param {Object} req The request object that contains (UserId and the page number)
     * @param {Object} res The response object
     * @returns {Object} A user object with selected fields
     */

  }, {
    key: "getTripRequestsByUser",
    value: function () {
      var _getTripRequestsByUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
        var userId, page, limit, offset, requests, manager, requestTrips;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                userId = req.user.id;
                page = req.query.page;
                limit = req.query.limit || 10;
                offset = (0, _paginate["default"])(page, limit);
                _context6.next = 6;
                return _trip["default"].findTripRequestsById(userId, limit, offset);

              case 6:
                requests = _context6.sent;
                _context6.next = 9;
                return _models["default"].user.findOne({
                  where: requests.managerId
                });

              case 9:
                manager = _context6.sent;
                _context6.next = 12;
                return _request["default"].getTripRequestsOfUser(requests, manager);

              case 12:
                requestTrips = _context6.sent;
                return _context6.abrupt("return", _response["default"].successMessage(res, 'My Trip Requests', 200, requestTrips));

              case 14:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function getTripRequestsByUser(_x10, _x11) {
        return _getTripRequestsByUser.apply(this, arguments);
      }

      return getTripRequestsByUser;
    }()
    /**
     * user will recieve all requests he/she  made and data is retrieved from the database
     * @param {Object} req The request object that contains (UserId and the page number)
     * @param {Object} res The response object
     * @returns {Object} A user object with selected fields
     */

  }, {
    key: "getTripRequestsByManager",
    value: function () {
      var _getTripRequestsByManager = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
        var managerId, page, limit, offset, requests, manager, requestTrips;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                managerId = req.user.id;
                page = req.query.page;
                limit = req.query.limit || 10;
                offset = (0, _paginate["default"])(page, limit);
                _context7.next = 6;
                return _trip["default"].findTripRequestsByManagerID(managerId, limit, offset);

              case 6:
                requests = _context7.sent;
                _context7.next = 9;
                return _models["default"].user.findOne({
                  where: requests.rows[0].dataValues.userId
                });

              case 9:
                manager = _context7.sent;
                _context7.next = 12;
                return _request["default"].getTripRequestsOfUser(requests, manager);

              case 12:
                requestTrips = _context7.sent;
                return _context7.abrupt("return", _response["default"].successMessage(res, 'Trips requested by your direct reports', 200, requestTrips));

              case 14:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function getTripRequestsByManager(_x12, _x13) {
        return _getTripRequestsByManager.apply(this, arguments);
      }

      return getTripRequestsByManager;
    }()
    /**
       * This method create a comment
       * @param {Object} req request data
       * @param {Object} res response data
       * @returns { Object} return a user message
       */

  }, {
    key: "createComment",
    value: function () {
      var _createComment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
        var subjectType, data, Id, tripRequest, tripRequestData, receiver;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                subjectType = 'trip request';
                _context8.next = 3;
                return _comment["default"].createComment(req, res, subjectType);

              case 3:
                data = _context8.sent;
                Id = req.params.subjectID;
                _context8.next = 7;
                return _trip["default"].findRequestByID(_models["default"].requesttrip, {
                  tripId: Id
                });

              case 7:
                tripRequest = _context8.sent;
                tripRequestData = tripRequest[0].dataValues;
                receiver = req.user.dataValues.id === tripRequestData.managerId ? tripRequestData.userId : tripRequestData.managerId;
                _context8.next = 12;
                return _notification["default"].sendNotification('trip_request_comment_event', receiver, 'New Comment', "".concat(req.user.firstName, " has posted a new comment"), data.dataValues.id, "".concat(process.env.BASE_URL, "/api/v1/trip-requests/").concat(Id, "/comments?page=1"));

              case 12:
                return _context8.abrupt("return", _response["default"].successMessage(res, 'comment created successfuly', 201, data));

              case 13:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function createComment(_x14, _x15) {
        return _createComment.apply(this, arguments);
      }

      return createComment;
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
    key: "getAllComments",
    value: function () {
      var _getAllComments = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
        var subjectType;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                subjectType = 'trip request';
                _context9.next = 3;
                return _comment["default"].getAllCommets(req, res, subjectType);

              case 3:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function getAllComments(_x16, _x17) {
        return _getAllComments.apply(this, arguments);
      }

      return getAllComments;
    }()
    /**
       * This method help to delete a comment
       * @param { Object } req request
       * @param { Object } res response
       * @returns { Object } user respose as object
       */

  }, {
    key: "deleteComment",
    value: function () {
      var _deleteComment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return _comment["default"].deleteComment(req, res);

              case 2:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function deleteComment(_x18, _x19) {
        return _deleteComment.apply(this, arguments);
      }

      return deleteComment;
    }()
    /**
     * This method get a specific trip request
     * @param {Object} req requestx
     * @param {Object} res response
     * @returns {Object} user response
     */

  }, {
    key: "getTripRequest",
    value: function () {
      var _getTripRequest = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
        var subjectID, userID, data;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                subjectID = req.params.subjectID;
                userID = req.user.id;
                _context11.next = 4;
                return _trip["default"].getTripRequest(subjectID, userID);

              case 4:
                data = _context11.sent;

                if (!data) {
                  _context11.next = 7;
                  break;
                }

                return _context11.abrupt("return", _response["default"].successMessage(res, 'success', 200, data));

              case 7:
                return _context11.abrupt("return", _response["default"].errorMessage(res, 'Trip not found', 404));

              case 8:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      function getTripRequest(_x20, _x21) {
        return _getTripRequest.apply(this, arguments);
      }

      return getTripRequest;
    }()
    /** Function to search in the trip requests table according to what the user is typing
     * @param {object} req the request sent to the server
     * @param {object} res the response returned
     * @returns {object} found data
     */

  }, {
    key: "search",
    value: function () {
      var _search = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(req, res) {
        var id, _req$query, keyword, limit, page, offset, foundTripRequestRecord, returnResponse;

        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                id = req.user.id;
                _req$query = req.query, keyword = _req$query.keyword, limit = _req$query.limit, page = _req$query.page;
                _context12.prev = 2;
                offset = (0, _paginate["default"])(page, limit);
                _context12.next = 6;
                return _request["default"].search(id, keyword, limit, offset);

              case 6:
                foundTripRequestRecord = _context12.sent;
                returnResponse = foundTripRequestRecord[0] ? _response["default"].successMessage(res, "Record found for keyword ".concat(keyword), 200, foundTripRequestRecord) : _response["default"].errorMessage(res, "No Records were found for keyword ".concat(keyword), 404);
                return _context12.abrupt("return", returnResponse);

              case 11:
                _context12.prev = 11;
                _context12.t0 = _context12["catch"](2);
                return _context12.abrupt("return", _response["default"].errorMessage(res, _context12.t0.message, 500));

              case 14:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, null, [[2, 11]]);
      }));

      function search(_x22, _x23) {
        return _search.apply(this, arguments);
      }

      return search;
    }()
    /**
     * This controller helps to know the type of trip
     * sothat it can redirect the request to a tageted controller
     * @param {Object} req request
     * @param {*} res response
     * @returns {Object} return user response
     */

  }, {
    key: "redirectTripFunctionsByType",
    value: function () {
      var _redirectTripFunctionsByType = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(req, res) {
        var body;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                body = Object.prototype.toString.call(req.body);

                if (!(body === '[object Array]')) {
                  _context13.next = 6;
                  break;
                }

                _context13.next = 4;
                return TripController.updateMultiCityTripInfo(req, res);

              case 4:
                _context13.next = 8;
                break;

              case 6:
                _context13.next = 8;
                return TripController.updateTripInfo(req, res);

              case 8:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }));

      function redirectTripFunctionsByType(_x24, _x25) {
        return _redirectTripFunctionsByType.apply(this, arguments);
      }

      return redirectTripFunctionsByType;
    }()
    /**
     * user should be able to edit trip  which is when the request is still open
     * @param {Object} req The request object
     * @param {Object} res The response object
     * @returns {Object} A user object with selected field
     */

  }, {
    key: "updateTripInfo",
    value: function () {
      var _updateTripInfo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(req, res) {
        var tripId, id, type, userId, userManager, managerId, Trip, updatedtrip;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.prev = 0;
                tripId = req.params.tripId;
                id = req.tripRequest[0].id;
                type = req.body.type;
                userId = req.user.id;
                _context14.next = 7;
                return _user["default"].findUserManager(userId);

              case 7:
                userManager = _context14.sent;
                managerId = userManager[0].managerId;
                _context14.next = 11;
                return _trip["default"].getTripByTripId(tripId);

              case 11:
                Trip = _context14.sent;
                _context14.next = 14;
                return _trip["default"].updateTrip(Trip[0].id, req.body);

              case 14:
                _context14.next = 16;
                return _request["default"].updateTripRequestStatusById(id);

              case 16:
                _context14.next = 18;
                return _trip["default"].getTripByTripId(tripId);

              case 18:
                updatedtrip = _context14.sent;
                _context14.next = 21;
                return _notification["default"].sendNotification('edit-trip-request', managerId, "New edited ".concat(type, " trip request."), "".concat(req.user.firstName, " has edited ").concat(type, " trip request"), id, "".concat(process.env.BASE_URL, "/api/v1/trip-requests/").concat(tripId, "/").concat(req.user.token));

              case 21:
                return _context14.abrupt("return", _response["default"].successMessage(res, 'Trip request was updated successfully', 200, updatedtrip));

              case 24:
                _context14.prev = 24;
                _context14.t0 = _context14["catch"](0);
                return _context14.abrupt("return", _response["default"].errorMessage(res, _context14.t0.message, 500));

              case 27:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, null, [[0, 24]]);
      }));

      function updateTripInfo(_x26, _x27) {
        return _updateTripInfo.apply(this, arguments);
      }

      return updateTripInfo;
    }()
    /**
     * This controller will help a user to edit multiple city trip
     * and user will input multiple trips as objects inside an array.
     * @param {Object} req The request object
     * @param {Object} res The response object
     * @returns {Object} A user object with selected fields
     */

  }, {
    key: "updateMultiCityTripInfo",
    value: function () {
      var _updateMultiCityTripInfo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(req, res) {
        var tripId, tripBody, trips, type, id, userId, userManager, managerId, Trip, updatedtrip;
        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.prev = 0;
                tripId = req.params.tripId;
                tripBody = req.body;
                trips = 0;
                type = 'multi-city';
                id = req.tripRequest[0].id;
                userId = req.user.id;
                _context16.next = 9;
                return _user["default"].findUserManager(userId);

              case 9:
                userManager = _context16.sent;
                managerId = userManager[0].managerId;
                _context16.next = 13;
                return _trip["default"].getTripByTripId(tripId);

              case 13:
                Trip = _context16.sent;

                if (Trip.length > tripBody.length) {
                  trips = Trip;
                } else {
                  trips = tripBody;
                }

                _context16.next = 17;
                return Promise.all(trips.map( /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(trip, index) {
                    return _regenerator["default"].wrap(function _callee15$(_context15) {
                      while (1) {
                        switch (_context15.prev = _context15.next) {
                          case 0:
                            if (!(tripBody[index] && !Trip[index])) {
                              _context15.next = 5;
                              break;
                            }

                            _context15.next = 3;
                            return _trip["default"].CreateMultiCityTrip(req, tripBody[index], tripId, 'multi-city');

                          case 3:
                            _context15.next = 15;
                            break;

                          case 5:
                            if (!(Trip[index] && !tripBody[index])) {
                              _context15.next = 10;
                              break;
                            }

                            _context15.next = 8;
                            return _request["default"].deleteMultiCityTripRequestByTripId(Trip[index].id);

                          case 8:
                            _context15.next = 15;
                            break;

                          case 10:
                            if (!(Trip[index] && tripBody[index] && tripBody[index].isUpdated === 'true')) {
                              _context15.next = 15;
                              break;
                            }

                            _context15.next = 13;
                            return _trip["default"].updateTrip(Trip[index].id, tripBody[index]);

                          case 13:
                            _context15.next = 15;
                            return _request["default"].updateTripRequestStatusById(id);

                          case 15:
                          case "end":
                            return _context15.stop();
                        }
                      }
                    }, _callee15);
                  }));

                  return function (_x30, _x31) {
                    return _ref2.apply(this, arguments);
                  };
                }()));

              case 17:
                _context16.next = 19;
                return _notification["default"].sendNotification('edit-trip-request', managerId, "New edited ".concat(type, " trip request."), "".concat(req.user.firstName, " has edited ").concat(type, " trip request"), id, "".concat(process.env.BASE_URL, "/api/v1/trip-requests/").concat(tripId, "/").concat(req.user.token));

              case 19:
                _context16.next = 21;
                return _trip["default"].getTripByTripId(tripId);

              case 21:
                updatedtrip = _context16.sent;
                return _context16.abrupt("return", _response["default"].successMessage(res, 'Trip request was updated successfully', 200, updatedtrip));

              case 25:
                _context16.prev = 25;
                _context16.t0 = _context16["catch"](0);
                return _context16.abrupt("return", _response["default"].errorMessage(res, _context16.t0.message, 500));

              case 28:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, null, [[0, 25]]);
      }));

      function updateMultiCityTripInfo(_x28, _x29) {
        return _updateMultiCityTripInfo.apply(this, arguments);
      }

      return updateMultiCityTripInfo;
    }()
    /** Function to return the number of trips created by a user and breaks them down into
     * types
     *
     * @param {*} req the request sent to the server
     * @param {*} res the response
     * @returns {*} the data found and the message
     */

  }, {
    key: "getTripStatistics",
    value: function () {
      var _getTripStatistics = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(req, res) {
        var startDate, someDate, dateFormated, _req$user, id, firstName, details, totalNumber;

        return _regenerator["default"].wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.prev = 0;
                startDate = req.query.startDate;
                someDate = new Date(startDate);
                someDate.setDate(someDate.getDate() + 1);
                dateFormated = someDate.toISOString().substr(0, 10);
                _req$user = req.user, id = _req$user.id, firstName = _req$user.firstName;
                _context17.next = 8;
                return _trip["default"].findTripsCreatedByuser(id, dateFormated);

              case 8:
                details = _context17.sent;
                totalNumber = details.reduce(function (sum, trip) {
                  return sum + parseInt(trip.count, 10);
                }, 0);
                return _context17.abrupt("return", _response["default"].successMessage(res, "Trip statistics for ".concat(firstName), 200, {
                  totalTrips: totalNumber,
                  details: details
                }));

              case 13:
                _context17.prev = 13;
                _context17.t0 = _context17["catch"](0);
                return _context17.abrupt("return", _response["default"].errorMessage(res, _context17.t0.message, 500));

              case 16:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, null, [[0, 13]]);
      }));

      function getTripStatistics(_x32, _x33) {
        return _getTripStatistics.apply(this, arguments);
      }

      return getTripStatistics;
    }()
  }]);
  return TripController;
}();

var _default = TripController;
exports["default"] = _default;