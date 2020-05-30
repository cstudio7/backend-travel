"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _app = _interopRequireDefault(require("./app"));

// This enables dotenv configurations
var port = process.env.PORT || 3000;

var server = _app["default"].listen(port, function () {
  return console.log('info', "Magic runs  on http://localhost:".concat(port));
});

var _default = _app["default"];
exports["default"] = _default;