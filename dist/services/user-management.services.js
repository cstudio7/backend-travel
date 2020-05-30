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

var _Queries = _interopRequireDefault(require("./Queries"));

var _models = _interopRequireDefault(require("../database/models"));

/** */
var userManagement = /*#__PURE__*/function () {
  function userManagement() {
    (0, _classCallCheck2["default"])(this, userManagement);
  }

  (0, _createClass2["default"])(userManagement, null, [{
    key: "findManagerByUserId",

    /**
       * This method provides a servis of finding
       * a manager in database by user id
       * @param { Integer } user user id
       * @returns { Integer } manager id
       */
    value: function () {
      var _findManagerByUserId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(user) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _Queries["default"].findManagerByUserId(_models["default"].usermanagement, user));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function findManagerByUserId(_x) {
        return _findManagerByUserId.apply(this, arguments);
      }

      return findManagerByUserId;
    }()
    /**
    * creating user query
    * @param {string} NewUserManagement users and managers table in database.
    * @returns {array} data the data to be returned.
    */

  }, {
    key: "CreateUserManagement",
    value: function () {
      var _CreateUserManagement = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(NewUserManagement) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _Queries["default"].create(_models["default"].usermanagement, NewUserManagement));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function CreateUserManagement(_x2) {
        return _CreateUserManagement.apply(this, arguments);
      }

      return CreateUserManagement;
    }()
    /**
    * assigning user to manager
    * @param {integer} userId id of the user to assign a manager.
    * @param {integer} managerId id of the manager to update.
    * @returns {array} data the data to be returned.
    */

  }, {
    key: "assignUsersManagers",
    value: function () {
      var _assignUsersManagers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(userId, managerId) {
        var updatedUserManagement;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _models["default"].usermanagement.update({
                  managerId: managerId
                }, {
                  where: {
                    userId: userId
                  },
                  returning: true
                });

              case 3:
                updatedUserManagement = _context3.sent;
                return _context3.abrupt("return", updatedUserManagement);

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

      function assignUsersManagers(_x3, _x4) {
        return _assignUsersManagers.apply(this, arguments);
      }

      return assignUsersManagers;
    }()
    /** Service to get all users with their managers
     * @param {*} limit the limit of rows retrieved
     * @param {*} offset the range of records retrieved
     * @returns {*} response to the user
     */

  }, {
    key: "getUsersWithManagers",
    value: function () {
      var _getUsersWithManagers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(limit, offset) {
        var usersManagers;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                usersManagers = _models["default"].sequelize.query("SELECT us.id, us.\"firstName\",us.\"lastName\", us.email, us.role, CONCAT(ul.\"firstName\",' ',ul.\"lastName\") as manager FROM usermanagements um JOIN users us on um.\"userId\" = us.id left JOIN users ul ON um.\"managerId\" = ul.id ORDER BY us.\"firstName\" limit ".concat(limit, " offset ").concat(offset), {
                  type: _models["default"].sequelize.QueryTypes.SELECT
                });
                return _context4.abrupt("return", usersManagers);

              case 5:
                _context4.prev = 5;
                _context4.t0 = _context4["catch"](0);
                return _context4.abrupt("return", _context4.t0);

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 5]]);
      }));

      function getUsersWithManagers(_x5, _x6) {
        return _getUsersWithManagers.apply(this, arguments);
      }

      return getUsersWithManagers;
    }()
    /** Service to get all managers
     * @returns {*} response to the user
     */

  }, {
    key: "getAllManagers",
    value: function () {
      var _getAllManagers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
        var allManagers;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _models["default"].user.findAll({
                  attributes: ['id', 'firstName', 'lastName'],
                  where: {
                    role: 'manager'
                  }
                });

              case 3:
                allManagers = _context5.sent;
                return _context5.abrupt("return", allManagers);

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

      function getAllManagers() {
        return _getAllManagers.apply(this, arguments);
      }

      return getAllManagers;
    }()
  }]);
  return userManagement;
}();

var _default = userManagement;
exports["default"] = _default;