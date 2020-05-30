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

var _response = _interopRequireDefault(require("../helpers/response.helper"));

/**
 * This class contains functions for all user services.
 */
var UserServices = /*#__PURE__*/function () {
  function UserServices() {
    (0, _classCallCheck2["default"])(this, UserServices);
  }

  (0, _createClass2["default"])(UserServices, null, [{
    key: "CreateUser",

    /**
    * creating user query
    * @param {string} NewUser users table in database.
    * @returns {array} data the data to be returned.
    */
    value: function () {
      var _CreateUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(NewUser) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _Queries["default"].create(_models["default"].user, NewUser));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function CreateUser(_x) {
        return _CreateUser.apply(this, arguments);
      }

      return CreateUser;
    }()
    /**
    * Find user by email
    * @param {Object} email User email.
    * @returns {Object} Returns a user object and if user doesn't exist it returns null.
    */

  }, {
    key: "findUserByEmail",
    value: function () {
      var _findUserByEmail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(email) {
        var user;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _models["default"].user.findOne({
                  where: {
                    email: email
                  }
                });

              case 3:
                user = _context2.sent;

                if (user) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", null);

              case 6:
                return _context2.abrupt("return", user);

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", undefined);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 9]]);
      }));

      function findUserByEmail(_x2) {
        return _findUserByEmail.apply(this, arguments);
      }

      return findUserByEmail;
    }()
    /** Function to find a user with a manager role
     *
     * @param {integer} managerId id of the manager to be finding
     * @returns {object} data of the manager found
     */

  }, {
    key: "findInUserManager",
    value: function () {
      var _findInUserManager = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(managerId) {
        var managerData;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _Queries["default"].findInUserManager(_models["default"].user, managerId);

              case 2:
                managerData = _context3.sent;

                if (managerData) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return", false);

              case 5:
                return _context3.abrupt("return", true);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function findInUserManager(_x3) {
        return _findInUserManager.apply(this, arguments);
      }

      return findInUserManager;
    }()
    /**
     * This a function that creates a user if he is not found in the database
     * @param {object} user this is a user email to be updated
     * @returns {object} return  a response object
     */

  }, {
    key: "findOrCreateUser",
    value: function () {
      var _findOrCreateUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(user) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _models["default"].user.findOrCreate({
                  where: {
                    email: user.email
                  },
                  defaults: user
                });

              case 3:
                return _context4.abrupt("return", _context4.sent);

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4["catch"](0);
                return _context4.abrupt("return", null);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 6]]);
      }));

      function findOrCreateUser(_x4) {
        return _findOrCreateUser.apply(this, arguments);
      }

      return findOrCreateUser;
    }()
    /**
     * This a function that activete a user account
     * @param {string} email this is a user email to be updated
     * @param {object} updateUser this is a value need to update  a user account
     * @returns {object} return  a response object
     */

  }, {
    key: "activeUser",
    value: function () {
      var _activeUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(email, updateUser) {
        var userToUpdate;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _models["default"].user.findOne({
                  where: {
                    email: email
                  }
                });

              case 3:
                userToUpdate = _context5.sent;

                if (!(userToUpdate && userToUpdate.isVerified)) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt("return", {
                  status: 409,
                  message: 'user already activated'
                });

              case 6:
                if (!userToUpdate) {
                  _context5.next = 10;
                  break;
                }

                _context5.next = 9;
                return _models["default"].user.update(updateUser, {
                  where: {
                    email: email
                  },
                  returning: true,
                  plain: true
                });

              case 9:
                return _context5.abrupt("return", {
                  status: 200,
                  message: 'user account successfuly activated'
                });

              case 10:
                return _context5.abrupt("return", {
                  status: 404,
                  message: 'User not found'
                });

              case 13:
                _context5.prev = 13;
                _context5.t0 = _context5["catch"](0);
                return _context5.abrupt("return", {
                  status: 400,
                  message: _context5.t0
                });

              case 16:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 13]]);
      }));

      function activeUser(_x5, _x6) {
        return _activeUser.apply(this, arguments);
      }

      return activeUser;
    }()
    /**
    * service to reset a password
    // eslint-disable-next-line valid-jsdoc
    * @param {Object} req user request
    * @param {Object} res user response
    * @param {Object} email user email
    * @param {Object} data user data
    * @returns {Object} return user message
    */

  }, {
    key: "resetPassword",
    value: function () {
      var _resetPassword = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res, email, data) {
        var userToUpdate;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.findUserByEmail(email);

              case 2:
                userToUpdate = _context6.sent;

                if (!(userToUpdate !== null && !userToUpdate.isVerified)) {
                  _context6.next = 7;
                  break;
                }

                _response["default"].errorMessage(res, 'Account is not verified', 401);

                _context6.next = 11;
                break;

              case 7:
                if (!(userToUpdate !== null)) {
                  _context6.next = 11;
                  break;
                }

                _context6.next = 10;
                return _models["default"].user.update(data, {
                  where: {
                    email: email
                  },
                  returning: true,
                  plain: true
                });

              case 10:
                _response["default"].successMessage(res, 'Password has successfuly changed', 200, req.user.token);

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function resetPassword(_x7, _x8, _x9, _x10) {
        return _resetPassword.apply(this, arguments);
      }

      return resetPassword;
    }()
    /**
     * This a function that update a user account fields
     * @param {string} email this is a user email
     * @param {object} userInfo this is user's fields you want to update
     * @returns {object} return  a response object
     */

  }, {
    key: "updateUser",
    value: function () {
      var _updateUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(email, userInfo) {
        var userToUpdate, updatedUser;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.findUserByEmail(email);

              case 2:
                userToUpdate = _context7.sent;

                if (userToUpdate) {
                  _context7.next = 5;
                  break;
                }

                return _context7.abrupt("return", {
                  status: 404,
                  message: 'User not found'
                });

              case 5:
                _context7.next = 7;
                return userToUpdate.update(userInfo);

              case 7:
                updatedUser = _context7.sent;
                return _context7.abrupt("return", updatedUser);

              case 9:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function updateUser(_x11, _x12) {
        return _updateUser.apply(this, arguments);
      }

      return updateUser;
    }()
    /**
     *
     * @param {Integer} userId the id of the user
     * @returns {Object} the booking of the exact passed user id
     */

  }, {
    key: "findUserManager",
    value: function () {
      var _findUserManager = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(userId) {
        var trip;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return _Queries["default"].findTrip(_models["default"].usermanagement, userId);

              case 3:
                trip = _context8.sent;
                return _context8.abrupt("return", trip);

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

      function findUserManager(_x13) {
        return _findUserManager.apply(this, arguments);
      }

      return findUserManager;
    }()
    /**
    * service to all users in database by filtering 10 users by page
    // eslint-disable-next-line valid-jsdoc
    * @param {Object} limit user request
    * @param {Object} offset user for the page
    * @returns {Object} return user message
    */

  }, {
    key: "getUsers",
    value: function () {
      var _getUsers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(limit, offset) {
        var searchUsers;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return _models["default"].user.findAndCountAll({
                  attributes: ['id', 'firstName', 'lastName', 'email', 'role', 'createdAt', 'updatedAt'],
                  order: [['createdAt', 'DESC']],
                  limit: limit,
                  offset: offset
                });

              case 3:
                searchUsers = _context9.sent;

                if (searchUsers) {
                  _context9.next = 6;
                  break;
                }

                return _context9.abrupt("return", null);

              case 6:
                return _context9.abrupt("return", searchUsers);

              case 9:
                _context9.prev = 9;
                _context9.t0 = _context9["catch"](0);
                return _context9.abrupt("return", undefined);

              case 12:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, null, [[0, 9]]);
      }));

      function getUsers(_x14, _x15) {
        return _getUsers.apply(this, arguments);
      }

      return getUsers;
    }()
    /**
    * service to all users in database
    // eslint-disable-next-line valid-jsdoc
    * @returns {Object} return user message
    */

  }, {
    key: "getAllUsers",
    value: function () {
      var _getAllUsers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10() {
        var searchUsers;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                _context10.next = 3;
                return _models["default"].user.findAll({
                  attributes: ['id', 'firstName', 'lastName', 'profileImage']
                });

              case 3:
                searchUsers = _context10.sent;
                return _context10.abrupt("return", searchUsers);

              case 7:
                _context10.prev = 7;
                _context10.t0 = _context10["catch"](0);
                return _context10.abrupt("return", _context10.t0);

              case 10:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, null, [[0, 7]]);
      }));

      function getAllUsers() {
        return _getAllUsers.apply(this, arguments);
      }

      return getAllUsers;
    }()
    /**
    * service to get Supported Role In Database
    // eslint-disable-next-line valid-jsdoc
    * @param {Object} name user request
    * @returns {Object} return user message
    */

  }, {
    key: "getRole",
    value: function () {
      var _getRole = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(name) {
        var searchRole;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.prev = 0;
                _context11.next = 3;
                return _models["default"].userRole.findOne({
                  where: {
                    name: name
                  }
                });

              case 3:
                searchRole = _context11.sent;

                if (searchRole) {
                  _context11.next = 6;
                  break;
                }

                return _context11.abrupt("return", null);

              case 6:
                return _context11.abrupt("return", searchRole);

              case 9:
                _context11.prev = 9;
                _context11.t0 = _context11["catch"](0);
                return _context11.abrupt("return", undefined);

              case 12:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, null, [[0, 9]]);
      }));

      function getRole(_x16) {
        return _getRole.apply(this, arguments);
      }

      return getRole;
    }()
    /**
     * This a function that update a user account fields
     * @param {string} id this is a user email
     * @param {object} userInfo this is user's fields you want to update
     * @returns {object} return  a response object
     */

  }, {
    key: "updateUserById",
    value: function () {
      var _updateUserById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(id, userInfo) {
        var userToUpdate, updatedUser;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return _models["default"].user.findByPk(id);

              case 2:
                userToUpdate = _context12.sent;

                if (userToUpdate) {
                  _context12.next = 5;
                  break;
                }

                return _context12.abrupt("return", {
                  status: 404,
                  message: 'User not found'
                });

              case 5:
                _context12.next = 7;
                return userToUpdate.update(userInfo);

              case 7:
                updatedUser = _context12.sent;
                return _context12.abrupt("return", updatedUser);

              case 9:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }));

      function updateUserById(_x17, _x18) {
        return _updateUserById.apply(this, arguments);
      }

      return updateUserById;
    }()
    /**
    * Find user
    * @param {Object} where User atributes. example: `{ email, id, firstName, ... }`.
    * @returns {Promise} Returns a user object and if user doesn't exist it returns null.
    */

  }, {
    key: "findUser",
    value: function () {
      var _findUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(where) {
        var user;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.prev = 0;
                _context13.next = 3;
                return _models["default"].user.findOne({
                  where: where
                });

              case 3:
                user = _context13.sent;

                if (user) {
                  _context13.next = 6;
                  break;
                }

                return _context13.abrupt("return", null);

              case 6:
                return _context13.abrupt("return", user);

              case 9:
                _context13.prev = 9;
                _context13.t0 = _context13["catch"](0);
                return _context13.abrupt("return", undefined);

              case 12:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, null, [[0, 9]]);
      }));

      function findUser(_x19) {
        return _findUser.apply(this, arguments);
      }

      return findUser;
    }()
  }]);
  return UserServices;
}();

var _default = UserServices;
exports["default"] = _default;