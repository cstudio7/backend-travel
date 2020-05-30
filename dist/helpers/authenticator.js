"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

/**
 * Handles jwt signing and verification
 * @class authenticator
 */
var authenticator = /*#__PURE__*/function () {
  function authenticator() {
    (0, _classCallCheck2["default"])(this, authenticator);
  }

  (0, _createClass2["default"])(authenticator, null, [{
    key: "verifyToken",

    /**
     * verify a jwt secret using either the provided key or JWT_SECRET
     * @param {String} token jwt token to be verified
     * @param {String} key secret key to be used for verification, defaults to JWT_SECRET
     * @returns {String} payload
     * @throws a jwt error object on verification failure
     * @memberof authenticator
     */
    value: function verifyToken(token) {
      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : process.env.JWT_KEY;

      // eslint-disable-next-line no-useless-catch
      try {
        var payload = _jsonwebtoken["default"].verify(token, key);

        return payload;
      } catch (error) {
        throw error;
      }
    }
  }]);
  return authenticator;
}();

var _default = authenticator;
exports["default"] = _default;