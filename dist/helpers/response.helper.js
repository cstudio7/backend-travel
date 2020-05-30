"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * Class is for all response return message and errors
 */
var response = /*#__PURE__*/function () {
  function response() {
    (0, _classCallCheck2["default"])(this, response);
  }

  (0, _createClass2["default"])(response, null, [{
    key: "errorMessage",

    /**
     * Checking error return Message
     * @param {Object} res The response object
     * @param {Object} msg The response object
     * @param {Object} status The response object
     * @returns {Object} the response
     */
    value: function errorMessage(res, msg, status) {
      return res.status(status).json({
        status: status,
        error: msg
      });
    }
    /**
     * Checking error return Message
     * @param {Object} res The response object
     * @param {Object} msg The response object
     * @param {Object} status The response object
     * @param {Object} data The response object
     * @returns {Object} the response
     */

  }, {
    key: "successMessage",
    value: function successMessage(res, msg, status, data) {
      return res.status(status).json({
        status: status,
        message: msg,
        data: data
      });
    }
  }]);
  return response;
}();

var _default = response;
exports["default"] = _default;