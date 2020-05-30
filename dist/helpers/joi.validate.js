"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _joiDate = _interopRequireDefault(require("@hapi/joi-date"));

var Joi = _joi["default"].extend(_joiDate["default"]);

var multyCity = Joi.object().keys({
  From: Joi.number().integer().required().messages({
    'any.required': 'Origin is required',
    'string.empty': 'Origin is not allowed to be empty'
  }),
  To: Joi.number().integer().required().messages({
    'any.required': 'Destination is required',
    'string.empty': 'Destination is not allowed to be empty'
  }),
  reason: Joi.string().required().messages({
    'any.required': 'Reason is required',
    'string.empty': 'Reason is not allowed to be empty'
  }),
  departureDate: Joi.date().greater('now').utc().format('YYYY-MM-DD').required().messages({
    'date.greater': 'Date should be greater than today\'s date',
    'date.format': 'Date must be in YYYY-MM-DD format',
    'any.required': 'Travel date is required'
  }),
  accomodationId: Joi.number().integer(),
  type: Joi.string().required().messages({
    'any.required': 'Type is required please',
    'string.empty': 'Type is not allowed to be empty'
  }),
  isUpdated: Joi["boolean"]().optional()
});
var _default = multyCity;
exports["default"] = _default;