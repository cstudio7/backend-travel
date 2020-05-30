"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _response = _interopRequireDefault(require("../helpers/response.helper"));

var _verifyToken = _interopRequireDefault(require("../helpers/verify.token.helper"));

_dotenv["default"].config();
/**
 * verify token class
 */


var verifyToken = /*#__PURE__*/function () {
  function verifyToken() {
    (0, _classCallCheck2["default"])(this, verifyToken);
  }

  (0, _createClass2["default"])(verifyToken, null, [{
    key: "paramToken",

    /**
       * check request params
       * @param {Object} req user request
       * @param {Object} res user response
       * @param {Object} next continue with request
       * @returns {Object} user response
       */
    value: function paramToken(req, res, next) {
      var token = req.params.autorizations;

      if (Number(token)) {
        return _response["default"].errorMessage(res, 'Token must not be a number', 401);
      }

      (0, _verifyToken["default"])(req, res, next, token);
    }
    /**
     * check request headers
     * @param {Object} req user request
     * @param {Object} res user response
     * @param {Object} next continue
     * @returns {Object} return user message
     */

  }, {
    key: "headerToken",
    value: function headerToken(req, res, next) {
      if (req.headers.token === undefined) {
        return _response["default"].errorMessage(res, 'Please Set The Authorization Header!', 401);
      }

      if (!/(?=^[Bb]earer)/.test(req.headers.token)) {
        return _response["default"].errorMessage(res, '"Bearer" not found Invalid token!', 401);
      }

      var token = req.headers.token.split(' ')[1];
      (0, _verifyToken["default"])(req, res, next, token);
    }
  }]);
  return verifyToken;
}();

var _default = verifyToken;
exports["default"] = _default;