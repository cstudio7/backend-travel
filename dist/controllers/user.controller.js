"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _user = _interopRequireDefault(require("../middlewares/user.middleware"));

var _authenticator = _interopRequireDefault(require("../helpers/authenticator"));

var _user2 = _interopRequireDefault(require("../services/user.service"));

var _Encryptor = _interopRequireDefault(require("../helpers/Encryptor"));

var _response = _interopRequireDefault(require("../helpers/response.helper"));

var _emailSender = _interopRequireDefault(require("../helpers/emailSender"));

var _Templates = _interopRequireDefault(require("../helpers/Templates"));

var _token = _interopRequireDefault(require("../helpers/token.helper"));

var _profile = _interopRequireDefault(require("../helpers/profile.helper"));

var _paginate = _interopRequireDefault(require("../helpers/paginate.helper"));

var _userManagement = _interopRequireDefault(require("../services/user-management.services"));

var _models = _interopRequireDefault(require("../database/models"));

// import mailer from '../helpers/send.email.helper';

/**
 * Class for users related operations such Sign UP, Sign In and others
 */
var userController = /*#__PURE__*/function () {
  function userController() {
    (0, _classCallCheck2["default"])(this, userController);
  }

  (0, _createClass2["default"])(userController, null, [{
    key: "signup",

    /**
       * signup a user and saving user data in the database
       * @param {Object} req The request object
       * @param {Object} res The response object
       * @returns {Object} A user object with selected fields
       */
    value: function () {
      var _signup = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var _req$body, firstName, lastName, email, gender, country, birthdate, password, token, NewUser, createdUser, data, confirmEmailPage;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _req$body = req.body, firstName = _req$body.firstName, lastName = _req$body.lastName, email = _req$body.email, gender = _req$body.gender, country = _req$body.country, birthdate = _req$body.birthdate;
                password = (0, _Encryptor["default"])(req.body.password);
                token = (0, _token["default"])({
                  email: email,
                  firstName: firstName,
                  isVerified: false
                });
                NewUser = {
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  gender: gender,
                  country: country,
                  birthdate: birthdate,
                  password: password,
                  isVerified: false,
                  token: token
                };
                _context.next = 7;
                return _models["default"].user.create(NewUser);

              case 7:
                createdUser = _context.sent;

                _userManagement["default"].CreateUserManagement({
                  userId: createdUser.id
                });

                data = {
                  token: token
                };
                confirmEmailPage = "".concat(process.env.FRONTEND_URL, "confirmation/").concat(token);
                _context.next = 13;
                return (0, _emailSender["default"])(email, 'Please Confirm Your Email', _Templates["default"].confirmEmail(confirmEmailPage, email));

              case 13:
                _response["default"].successMessage(res, 'user created successfully visit email to verify account', 201, confirmEmailPage, data);

                _context.next = 19;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", _response["default"].errorMessage(res, _context.t0.message, 500));

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 16]]);
      }));

      function signup(_x, _x2) {
        return _signup.apply(this, arguments);
      }

      return signup;
    }()
    /**
     * Logs in a user by checking if they exist in the database
     * and if the supplied password matches the stored password
     * @param {Object} req The request object
     * @param {Object} res The response object
     * @returns {Object} A user object with selected fields
     * excluing the password
     */

  }, {
    key: "signIn",
    value: function () {
      var _signIn = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _user["default"])(req, res);

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function signIn(_x3, _x4) {
        return _signIn.apply(this, arguments);
      }

      return signIn;
    }()
    /**
     * It activate a user account by updating isVerified attribute to true
     * @param {int} req This is the parameter(user id) that will be passed in url
     * @param {object} res This is a response will be send to the user
     * @returns {object} return object which include status and message
     */

  }, {
    key: "updatedUser",
    value: function () {
      var _updatedUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var activate, token, _authenticator$verify, payload, email, updateUser;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                activate = {
                  isVerified: true
                };
                token = req.params.token;
                _authenticator$verify = _authenticator["default"].verifyToken(token), payload = _authenticator$verify.payload;
                email = payload.email;
                _context3.next = 6;
                return _user2["default"].activeUser(email, activate);

              case 6:
                updateUser = _context3.sent;

                if (!(updateUser.status === 200)) {
                  _context3.next = 9;
                  break;
                }

                return _context3.abrupt("return", _response["default"].successMessage(res, updateUser.message, updateUser.status, 'Hurray you can now login'));

              case 9:
                return _context3.abrupt("return", _response["default"].errorMessage(res, updateUser.message, updateUser.status));

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function updatedUser(_x5, _x6) {
        return _updatedUser.apply(this, arguments);
      }

      return updatedUser;
    }()
    /**
    *login function to get profile from google and facebook and manipulate it
    *
    *
    *@param {object} accessToken response
    *@param {object} refreshToken response
    *@param {object} profile object
    *@param {object} done callback
    *@returns {object} object
    */

  }, {
    key: "googleAndFacebookPlusAuth",
    value: function () {
      var _googleAndFacebookPlusAuth = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(accessToken, refreshToken, profile, done) {
        var userData, _yield$UserServices$f, _yield$UserServices$f2, userCreated;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                userData = {
                  firstName: profile.name.givenName,
                  lastName: profile.name.familyName,
                  email: profile.emails[0].value,
                  authtype: profile.provider,
                  profileImage: profile.photos[0].value,
                  isVerified: true
                };
                _context4.next = 4;
                return _user2["default"].findOrCreateUser(userData);

              case 4:
                _yield$UserServices$f = _context4.sent;
                _yield$UserServices$f2 = (0, _slicedToArray2["default"])(_yield$UserServices$f, 1);
                userCreated = _yield$UserServices$f2[0];
                done(null, userCreated.dataValues);
                _context4.next = 13;
                break;

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](0);
                done(_context4.t0, false);

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 10]]);
      }));

      function googleAndFacebookPlusAuth(_x7, _x8, _x9, _x10) {
        return _googleAndFacebookPlusAuth.apply(this, arguments);
      }

      return googleAndFacebookPlusAuth;
    }()
    /**
    *login function to return data from social accounts to the user
    *
    *
    *@param {object} req request
    *@param {object} res response
    *@returns {object} object
    */

  }, {
    key: "authGoogleAndFacebook",
    value: function () {
      var _authGoogleAndFacebook = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var _req$user, authtype, email, firstName, isVerified, id, role, token, userInfo;

        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _req$user = req.user, authtype = _req$user.authtype, email = _req$user.email, firstName = _req$user.firstName, isVerified = _req$user.isVerified, id = _req$user.id, role = _req$user.role;
                token = (0, _token["default"])({
                  email: email,
                  firstName: firstName,
                  isVerified: isVerified,
                  id: id,
                  role: role
                });
                _context5.next = 4;
                return _user2["default"].updateUser(req.user.email, {
                  token: token
                });

              case 4:
                userInfo = JSON.stringify({
                  authtype: authtype,
                  token: token
                });
                return _context5.abrupt("return", res.redirect("".concat(process.env.BASE_URL_REACT, "?info=").concat(userInfo)));

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function authGoogleAndFacebook(_x11, _x12) {
        return _authGoogleAndFacebook.apply(this, arguments);
      }

      return authGoogleAndFacebook;
    }()
    /**
    * It used to reset a user password
    * @param {object} req user request
    * @param {object} res user response
    * @returns {object} result
    */

  }, {
    key: "resetPassword",
    value: function resetPassword(req, res) {
      if (req.body.password !== req.body.confirmPassword) {
        return _response["default"].errorMessage(res, 'Password does not match!', 400);
      }

      var data = {
        password: (0, _Encryptor["default"])(req.body.password)
      };

      _user2["default"].resetPassword(req, res, req.user.email, data);
    }
    /**
     * send a reset password link to the user
     * @param {Object} req user request
     * @param {Object} res user response
     * @returns {Object} return user response
     */

  }, {
    key: "sendResetPasswordLink",
    value: function () {
      var _sendResetPasswordLink = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
        var result, token, emailView;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _user2["default"].findUserByEmail(req.body.email);

              case 2:
                result = _context6.sent;

                if (!(result !== null)) {
                  _context6.next = 8;
                  break;
                }

                token = (0, _token["default"])({
                  email: req.body.email,
                  isVerified: result.isVerified,
                  id: result.id
                });
                emailView = mailer.resetPasswordView(token, result.firstName);
                mailer.sendEmail(req.body.email, 'Reset Password', emailView);
                return _context6.abrupt("return", _response["default"].successMessage(res, 'Email sent please check you email to reset your password', 200, token));

              case 8:
                return _context6.abrupt("return", _response["default"].errorMessage(res, 'user not found!', 404));

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function sendResetPasswordLink(_x13, _x14) {
        return _sendResetPasswordLink.apply(this, arguments);
      }

      return sendResetPasswordLink;
    }()
    /**
     * It activate a user account by updating isVerified attribute to true
     * @param {int} req This is the parameter(user id) that will be passed in url
     * @param {object} res This is a response will be send to the user
     * @returns {object} return object which include status and message
     */

  }, {
    key: "viewProfile",
    value: function () {
      var _viewProfile = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
        var email;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                email = req.user.email;
                return _context7.abrupt("return", _profile["default"].getProfileData(email, req, res));

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function viewProfile(_x15, _x16) {
        return _viewProfile.apply(this, arguments);
      }

      return viewProfile;
    }()
    /**
     * It activate a user account by updating isVerified attribute to true
     * @param {int} req This is the parameter(user id) that will be passed in url
     * @param {object} res This is a response will be send to the user
     * @returns {object} return object which include status and message
     */

  }, {
    key: "editProfile",
    value: function () {
      var _editProfile = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
        var email, profile, status, userId;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                // can not update to an existing email
                // check if user provided email
                email = req.user.email;
                profile = _profile["default"].chooseProfileData(email, req.body); // Check if user is verified

                if (!(!req.user.isVerified === true)) {
                  _context8.next = 5;
                  break;
                }

                status = 401;
                return _context8.abrupt("return", _response["default"].errorMessage(res, 'User Is Not Verified, Please verify the User First', status));

              case 5:
                userId = req.user.email;

                _user2["default"].updateUser(userId, profile);

                return _context8.abrupt("return", _response["default"].successMessage(res, 'User Profile are Updated', 200, profile));

              case 8:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function editProfile(_x17, _x18) {
        return _editProfile.apply(this, arguments);
      }

      return editProfile;
    }()
    /**
     * This logs out a user by updating token attribute to null
     * @param {object} req This is a request coming from a user
     * @param {object} res This is a response will be sent to a user
     * @returns {object} return promise object
     */

  }, {
    key: "logout",
    value: function () {
      var _logout = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return _user2["default"].updateUser(req.user.email, {
                  token: null
                });

              case 2:
                return _context9.abrupt("return", _response["default"].successMessage(res, 'User is successfully logged out.', 200));

              case 3:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function logout(_x19, _x20) {
        return _logout.apply(this, arguments);
      }

      return logout;
    }()
    /** It gets all users especially username, email, role, created At, updated At
     * @param {int} req This is the parameter(user id) that will be passed in url
     * @param {object} res This is a response will be send to the user
     * @returns {object} return object which include status and message
     */

  }, {
    key: "getUsers",
    value: function () {
      var _getUsers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
        var page, limit, offset, users;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                page = req.query.page;
                limit = 10;
                offset = (0, _paginate["default"])(page, limit);
                _context10.next = 5;
                return _user2["default"].getUsers(limit, offset);

              case 5:
                users = _context10.sent;

                if (!(users.count > offset)) {
                  _context10.next = 8;
                  break;
                }

                return _context10.abrupt("return", _response["default"].successMessage(res, 'Users', 200, users));

              case 8:
                return _context10.abrupt("return", _response["default"].errorMessage(res, 'No User Found', 404));

              case 9:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function getUsers(_x21, _x22) {
        return _getUsers.apply(this, arguments);
      }

      return getUsers;
    }()
    /**
     * It activate a user account by updating isVerified attribute to true
     * @param {int} req This is the parameter(user id) that will be passed in url
     * @param {object} res This is a response will be send to the user
     * @returns {object} return object which include status and message
     */

  }, {
    key: "updateRole",
    value: function () {
      var _updateRole = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
        var role, userId, roleToUpdate, getRole, data, userData;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                role = req.body.role;
                userId = req.params.userId;
                roleToUpdate = {
                  role: role.toLowerCase()
                };
                _context11.next = 5;
                return _user2["default"].getRole(role);

              case 5:
                getRole = _context11.sent;

                if (!getRole) {
                  _context11.next = 12;
                  break;
                }

                _context11.next = 9;
                return _user2["default"].updateUserById(userId, roleToUpdate);

              case 9:
                data = _context11.sent;
                userData = data.getDataValue('role');
                return _context11.abrupt("return", _response["default"].successMessage(res, 'User Role successfully updated', 200, {
                  role: userData
                }));

              case 12:
                return _context11.abrupt("return", _response["default"].errorMessage(res, 'We dont support that role', 401));

              case 13:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      function updateRole(_x23, _x24) {
        return _updateRole.apply(this, arguments);
      }

      return updateRole;
    }()
    /**
    * @param {*} req the request sent to the server
    * @param {*} res the response from the server
    * @returns {*} the response from the server
    */

  }, {
    key: "assignUserToManager",
    value: function () {
      var _assignUserToManager = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(req, res) {
        var userId, managerId, _yield$userManagement, _yield$userManagement2, updateUserManagements;

        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.prev = 0;
                userId = req.params.userId;
                managerId = req.body.managerId;
                _context12.next = 5;
                return _userManagement["default"].assignUsersManagers(parseInt(userId, 10), managerId);

              case 5:
                _yield$userManagement = _context12.sent;
                _yield$userManagement2 = (0, _slicedToArray2["default"])(_yield$userManagement, 2);
                updateUserManagements = _yield$userManagement2[1];
                return _context12.abrupt("return", _response["default"].successMessage(res, 'User assigned to manager successfully', 200, updateUserManagements));

              case 11:
                _context12.prev = 11;
                _context12.t0 = _context12["catch"](0);
                return _context12.abrupt("return", _response["default"].errorMessage(res, _context12.t0.message, 500));

              case 14:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, null, [[0, 11]]);
      }));

      function assignUserToManager(_x25, _x26) {
        return _assignUserToManager.apply(this, arguments);
      }

      return assignUserToManager;
    }()
    /**
     *
     * @param {*} req the request sent to the server
     * @param {*} res the response from the server
     * @returns {*} response to the user
     */

  }, {
    key: "getUsersWithManagers",
    value: function () {
      var _getUsersWithManagers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(req, res) {
        var _req$query, limit, page, offset, usersManagers;

        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.prev = 0;
                _req$query = req.query, limit = _req$query.limit, page = _req$query.page;
                offset = (0, _paginate["default"])(page, limit);
                _context13.next = 5;
                return _userManagement["default"].getUsersWithManagers(limit, offset);

              case 5:
                usersManagers = _context13.sent;
                return _context13.abrupt("return", _response["default"].successMessage(res, 'Users and their manager', 200, usersManagers));

              case 9:
                _context13.prev = 9;
                _context13.t0 = _context13["catch"](0);
                return _context13.abrupt("return", _response["default"].errorMessage(res, _context13.t0.message, 500));

              case 12:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, null, [[0, 9]]);
      }));

      function getUsersWithManagers(_x27, _x28) {
        return _getUsersWithManagers.apply(this, arguments);
      }

      return getUsersWithManagers;
    }()
    /**
     * @param {*} req the request sent to the server
     * @param {*} res the response from the server
     * @returns {*} response to the user
     */

  }, {
    key: "getAllManagers",
    value: function () {
      var _getAllManagers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(req, res) {
        var allManagers;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.prev = 0;
                _context14.next = 3;
                return _userManagement["default"].getAllManagers();

              case 3:
                allManagers = _context14.sent;
                return _context14.abrupt("return", _response["default"].successMessage(res, 'All managers on barefoot nomad', 200, allManagers));

              case 7:
                _context14.prev = 7;
                _context14.t0 = _context14["catch"](0);
                return _context14.abrupt("return", _response["default"].errorMessage(res, _context14.t0.message, 500));

              case 10:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, null, [[0, 7]]);
      }));

      function getAllManagers(_x29, _x30) {
        return _getAllManagers.apply(this, arguments);
      }

      return getAllManagers;
    }()
  }]);
  return userController;
}();

var _default = userController;
exports["default"] = _default;