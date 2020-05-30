"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _response = _interopRequireDefault(require("../helpers/response.helper"));

/**
 *
 * @param {Object} req req
 * @param {Object} res res
 * @param {Object} next ment
 * @returns {Object} hghfgjh
 */
var verifyUser = function verifyUser(req, res, next) {
  if (!req.user.isVerified) {
    return _response["default"].errorMessage(res, 'Account not verified', 401, 'error');
  }

  return next();
};

var _default = verifyUser;
exports["default"] = _default;