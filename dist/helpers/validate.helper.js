"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _expressValidator = require("express-validator");

/**
 * A class that contains functions for all validations
 */
var Validate = /*#__PURE__*/function () {
  function Validate() {
    (0, _classCallCheck2["default"])(this, Validate);
  }

  (0, _createClass2["default"])(Validate, null, [{
    key: "signup",

    /**
    * This return a validation chain for signup data.
    * @returns {[{ValidationChain}]}.
    */
    value: function signup() {
      return [(0, _expressValidator.check)('firstName', 'First name should be valid.').isString(), (0, _expressValidator.check)('lastName', 'Last name should be valid.').isString(), (0, _expressValidator.check)('email', 'Invalid email address, example: example@gmail.com.').isEmail(), (0, _expressValidator.check)('password', 'Password should be provided and must be alphanumeric with atleast 8 charactors.').isLength({
        min: 8
      }).isAlphanumeric(), (0, _expressValidator.check)('country', 'Provided country is not valid.').isString().isLength({
        min: 3
      }), (0, _expressValidator.check)('gender', 'Provided gender is not valid.').isString().isLength({
        min: 3
      }).optional(), (0, _expressValidator.check)('birthday', 'Provided birthday is not valid.').isString().isLength({
        min: 3
      }).optional(), (0, _expressValidator.check)('phoneNumber', 'Provided phone number is not valid.').isString().isLength({
        min: 10,
        max: 13
      }).optional()];
    }
    /**
     * validating User Inputs
     * @returns {Object} A user object with selected fields
     * excluing the password
     */

  }, {
    key: "signin",
    value: function signin() {
      return [// username must be an email
      (0, _expressValidator.check)('email', 'Invalid email address, example: example@gmail.com.').isEmail(), // password must be at least 5 chars long
      (0, _expressValidator.check)('password', 'Invalid password, your password should be alphanumeric with atleast 8 charactors.').isLength({
        min: 8
      }).isAlphanumeric()];
    }
    /**
    * this function validate reset password form
    * @returns {Object} user response
    */

  }, {
    key: "resetPassword",
    value: function resetPassword() {
      return [(0, _expressValidator.check)('password', 'Password should be provided and must be alphanumeric with atleast 8 charactors.').isLength({
        min: 8
      }).isAlphanumeric(), (0, _expressValidator.check)('confirmPassword', 'conform Password should be provided and must be alphanumeric with atleast 8 charactors.').isLength({
        min: 8
      }).isAlphanumeric()];
    }
    /**
     * this function send reset password link via email
     * @returns {Object} user response
     */

  }, {
    key: "sendResetPasswordLink",
    value: function sendResetPasswordLink() {
      return [(0, _expressValidator.check)('email', 'Invalid email address, example: example@gmail.com.').isEmail()];
    }
    /**
    * this function validate trip requests
    * @returns {Object} user response
    */

  }, {
    key: "tripsValidation",
    value: function tripsValidation() {
      return [(0, _expressValidator.check)('From', 'origin should be valid.').isInt(), (0, _expressValidator.check)('To', 'destination should be valid.').isInt(), (0, _expressValidator.check)('reason', 'reason should be valid.').isString(), (0, _expressValidator.check)('accommodation', 'accomodation should be valid.').isInt().optional()];
    }
    /**
     * Validate user preference data
     * @returns {[{ValidationChain}]}.
     */

  }, {
    key: "userPreference",
    value: function userPreference() {
      return [(0, _expressValidator.check)('appNotification', 'App notification need to be boolean').isBoolean(), (0, _expressValidator.check)('emailNotification', 'Email notification need to be boolean').isBoolean()];
    }
    /**
     * Validate when updating notification
     * @returns {[{ValidationChain}]}.
     */

  }, {
    key: "validateOnUpdateNotification",
    value: function validateOnUpdateNotification() {
      return [(0, _expressValidator.check)('isRead', 'isRead needs to be a boolean').isBoolean()];
    }
    /**
     * This method validate a comment on trip request
     * @returns { Object } user message
     */

  }, {
    key: "CommentValidation",
    value: function CommentValidation() {
      return [(0, _expressValidator.check)('comment', 'Comment should be valid.').isLength({
        min: 3
      }).isString()];
    }
    /**
    * this function validate creating accomodation
    * @returns {Object} user response
    */

  }, {
    key: "accomodationValidation",
    value: function accomodationValidation() {
      return [(0, _expressValidator.check)('accommodationName', 'accomodation name should be valid.').isString(), (0, _expressValidator.check)('description', 'accomodation description should be valid.').isString().optional(), (0, _expressValidator.check)('locationId', 'accommodation location should be valid.').isInt(), (0, _expressValidator.check)('owner', 'owner name should be valid.').isString(), (0, _expressValidator.check)('category', 'accomodation category should be valid.').isString().optional(), (0, _expressValidator.check)('images', 'images should be valid.').isArray().optional(), (0, _expressValidator.check)('rooms', 'rooms should be valid.').isArray().optional(), (0, _expressValidator.check)('services', 'accomodation services should be valid.').isArray().optional(), (0, _expressValidator.check)('amenities', 'accomodation amenities should be valid.').isArray().optional()];
    }
    /**
     * This method validate a booking an accommodation facility request
     * @returns {[{ValidationChain}]}.
     */

  }, {
    key: "bookingValidation",
    value: function bookingValidation() {
      return [(0, _expressValidator.check)('accommodationId', 'accommodationId needs to be a number').isInt(), (0, _expressValidator.check)('roomTypeId', 'roomTypeId needs to be a number').isInt(), (0, _expressValidator.check)('departureDate', 'departureDate needs to be a date format').toDate(), (0, _expressValidator.check)('checkoutDate', 'checkoutDate needs to be a date format').toDate()];
    }
    /**
     * This method validate a like or unlike accommodation request
     * @returns { Object } user message
     */

  }, {
    key: "likeOrUnlikeValidation",
    value: function likeOrUnlikeValidation() {
      return [(0, _expressValidator.check)('isLike', 'isLike needs to be a boolean').isBoolean()];
    }
  }]);
  return Validate;
}();

var _default = Validate;
exports["default"] = _default;