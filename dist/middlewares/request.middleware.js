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

var _request = _interopRequireDefault(require("../services/request.services"));

var _user = _interopRequireDefault(require("../services/user.service"));

/** class to implement request service functionalities
 *
 */
var TripRequestMiddleware = /*#__PURE__*/function () {
  function TripRequestMiddleware() {
    (0, _classCallCheck2["default"])(this, TripRequestMiddleware);
  }

  (0, _createClass2["default"])(TripRequestMiddleware, null, [{
    key: "checkIfUserIsManager",

    /** function that checks if the user logged in is a manager
     * @param {object} req the request we send to the server
     * @param {object} res the response we get from the server
     * @param {function} next calls the next middleware in the route
     * @returns {function} next calls the next middleware in the route
     */
    value: function () {
      var _checkIfUserIsManager = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
        var managerId, userData;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                managerId = req.user.id;
                _context.next = 3;
                return _user["default"].findInUserManager(managerId);

              case 3:
                userData = _context.sent;

                if (userData) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", _response["default"].errorMessage(res, 'You are not a manager, please consult your administrator for roles', 403));

              case 6:
                return _context.abrupt("return", next());

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function checkIfUserIsManager(_x, _x2, _x3) {
        return _checkIfUserIsManager.apply(this, arguments);
      }

      return checkIfUserIsManager;
    }()
    /** function that checks if the request passed in the params exists and is pending
     * @param {object} req the request we send to the server
     * @param {object} res the response we get from the server
     * @param {function} next calls the next middleware in the route
     * @returns {function} next calls the next middleware in the route
     */

  }, {
    key: "checkIfRequestFound",
    value: function () {
      var _checkIfRequestFound = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
        var requestid, requestFound;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                requestid = req.params.tripRequestId;
                _context2.next = 3;
                return _request["default"].getTripRequestData(requestid);

              case 3:
                requestFound = _context2.sent;

                if (requestFound) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", _response["default"].errorMessage(res, 'Trip request not found', 404));

              case 6:
                req.tripRequest = requestFound;
                return _context2.abrupt("return", next());

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function checkIfRequestFound(_x4, _x5, _x6) {
        return _checkIfRequestFound.apply(this, arguments);
      }

      return checkIfRequestFound;
    }()
    /** function that checks if the user logged is the manager of the user who requested the trip
     * @param {object} req the request we send to the server
     * @param {object} res the response we get from the server
     * @param {function} next calls the next middleware in the route
     * @returns {function} next calls the next middleware in the route
     */

  }, {
    key: "checkIfUsersManager",
    value: function () {
      var _checkIfUsersManager = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
        var id, managerId;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = req.user.id; // logged in user

                managerId = req.tripRequest.managerId;

                if (!(id !== managerId)) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt("return", _response["default"].errorMessage(res, 'You are not authorized to perform this operation', 403));

              case 4:
                return _context3.abrupt("return", next());

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function checkIfUsersManager(_x7, _x8, _x9) {
        return _checkIfUsersManager.apply(this, arguments);
      }

      return checkIfUsersManager;
    }()
    /** function that checks if the request trip is already approved or rejected
     * @param {object} req the request we send to the server
     * @param {object} res the response we get from the server
     * @param {function} next calls the next middleware in the route
     * @returns {function} next calls the next middleware in the route
     */

  }, {
    key: "checkIfAlreadyChanged",
    value: function () {
      var _checkIfAlreadyChanged = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
        var status;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                status = req.body.status;

                if (!(req.tripRequest.status === status)) {
                  _context4.next = 3;
                  break;
                }

                return _context4.abrupt("return", _response["default"].errorMessage(res, "You have already ".concat(status, " this trip request"), 409));

              case 3:
                return _context4.abrupt("return", next());

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function checkIfAlreadyChanged(_x10, _x11, _x12) {
        return _checkIfAlreadyChanged.apply(this, arguments);
      }

      return checkIfAlreadyChanged;
    }()
    /** function that checks if the user logged is the manager of the user who requested the trip
     * @param {object} req the request we send to the server
     * @param {object} res the response we get from the server
     * @param {function} next calls the next middleware in the route
     * @returns {function} next calls the next middleware in the route
     */

  }, {
    key: "checkIfBodyIsValid",
    value: function () {
      var _checkIfBodyIsValid = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
        var validStatuses, status;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                validStatuses = ['approved', 'rejected'];
                status = req.body.status;

                if (status) {
                  _context5.next = 4;
                  break;
                }

                return _context5.abrupt("return", _response["default"].errorMessage(res, 'Bad request, it should be status!', 400));

              case 4:
                if (validStatuses.includes(status)) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt("return", _response["default"].errorMessage(res, 'The status can only be approved or rejected', 400));

              case 6:
                return _context5.abrupt("return", next());

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function checkIfBodyIsValid(_x13, _x14, _x15) {
        return _checkIfBodyIsValid.apply(this, arguments);
      }

      return checkIfBodyIsValid;
    }()
  }]);
  return TripRequestMiddleware;
}();

var _default = TripRequestMiddleware;
exports["default"] = _default;