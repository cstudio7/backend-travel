"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _expressValidator = require("express-validator");

var _response = _interopRequireDefault(require("../helpers/response.helper"));

var isValid = function isValid(req, res, next) {
  var body = Object.prototype.toString.call(req.body);
  if (body === '[object Array]') return next(); // Finds the validation errors in this request

  var results = (0, _expressValidator.validationResult)(req);

  if (!results.isEmpty()) {
    return _response["default"].errorMessage(res, results.errors.map(function (i) {
      return i.msg;
    }), 422);
  }

  next();
};

var _default = isValid;
exports["default"] = _default;