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

/**
* Class for users to create trips
*/
var UserManagementMiddleware = /*#__PURE__*/function () {
  function UserManagementMiddleware() {
    (0, _classCallCheck2["default"])(this, UserManagementMiddleware);
  }

  (0, _createClass2["default"])(UserManagementMiddleware, null, [{
    key: "checkIfUserExistAndNotAdmin",

    /** Function that checks if the user passed in the params exists in our system and is not an admin
     * @param {*} req the request sent to the server
     * @param {*} res the response from the server
     * @param {*} next the next middleware on the chain
     * @returns {*} the next middleware on the chain
    */
    value: function () {
      var _checkIfUserExistAndNotAdmin = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
        var foundUser;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _user["default"].findUser({
                  id: req.params.userId
                });

              case 2:
                foundUser = _context.sent;

                if (foundUser) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", _response["default"].errorMessage(res, 'user does not exist', 404));

              case 5:
                if (!(foundUser.role === 'admin')) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", _response["default"].errorMessage(res, 'You cannot perform this action', 403));

              case 7:
                return _context.abrupt("return", next());

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function checkIfUserExistAndNotAdmin(_x, _x2, _x3) {
        return _checkIfUserExistAndNotAdmin.apply(this, arguments);
      }

      return checkIfUserExistAndNotAdmin;
    }()
    /** Function that checks if the user passed in the params exists in our system and is not an admin
    * @param {*} req the request sent to the server
    * @param {*} res the response from the server
    * @param {*} next the next middleware on the chain
    * @returns {*} the next middleware on the chain
    */

  }, {
    key: "checkIfManagerExist",
    value: function () {
      var _checkIfManagerExist = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
        var foundManager;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _user["default"].findUser({
                  id: req.body.managerId
                });

              case 2:
                foundManager = _context2.sent;

                if (!(!foundManager || foundManager.role !== 'manager')) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", _response["default"].errorMessage(res, 'The user has to be a manager to be assigned a user', 404));

              case 5:
                if (!(req.body.managerId === parseInt(req.params.userId, 10))) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return", _response["default"].errorMessage(res, 'A user cannot be his own manager', 403));

              case 7:
                return _context2.abrupt("return", next());

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function checkIfManagerExist(_x4, _x5, _x6) {
        return _checkIfManagerExist.apply(this, arguments);
      }

      return checkIfManagerExist;
    }()
  }]);
  return UserManagementMiddleware;
}();

var _default = UserManagementMiddleware;
exports["default"] = _default;