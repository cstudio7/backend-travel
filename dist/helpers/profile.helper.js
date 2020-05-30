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

var _response = _interopRequireDefault(require("./response.helper"));

/**
 * This class contains functions for all user to view and update profile.
 */
var ProfileHelper = /*#__PURE__*/function () {
  function ProfileHelper() {
    (0, _classCallCheck2["default"])(this, ProfileHelper);
  }

  (0, _createClass2["default"])(ProfileHelper, null, [{
    key: "chooseProfileData",

    /**
    * service to choose profile to edit
    // eslint-disable-next-line valid-jsdoc
    * @param {Object} email user request
    * @param {Object} userData user request
    * @returns {Object} return user message
    */
    value: function chooseProfileData(email, userData) {
      var id = userData.id,
          firstName = userData.firstName,
          lastName = userData.lastName,
          country = userData.country,
          gender = userData.gender,
          birthdate = userData.birthdate,
          preferredlanguage = userData.preferredlanguage,
          preferredcurrency = userData.preferredcurrency,
          place = userData.place,
          department = userData.department,
          profileImage = userData.profileImage,
          appNotification = userData.appNotification,
          emailNotification = userData.emailNotification;
      return {
        id: id,
        email: email,
        firstName: firstName,
        lastName: lastName,
        country: country,
        gender: gender,
        birthdate: birthdate,
        preferredlanguage: preferredlanguage,
        preferredcurrency: preferredcurrency,
        place: place,
        department: department,
        profileImage: profileImage,
        appNotification: appNotification,
        emailNotification: emailNotification
      };
    }
    /**
     * service to choose profile to edit
     * @param {Object} email The request object
     * @param {Object} req The request object
     * @param {Object} res The response object
     * @returns {Object} A user object with selected fields
     * excluing the password
     */

  }, {
    key: "getProfileData",
    value: function () {
      var _getProfileData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(email, req, res) {
        var user, userProfile;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _user["default"].findUserByEmail(email);

              case 2:
                user = _context.sent;
                userProfile = this.chooseProfileData(email, user);
                return _context.abrupt("return", _response["default"].successMessage(res, 'User Profile', 200, userProfile));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getProfileData(_x, _x2, _x3) {
        return _getProfileData.apply(this, arguments);
      }

      return getProfileData;
    }()
  }]);
  return ProfileHelper;
}();

var _default = ProfileHelper;
exports["default"] = _default;