"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _index = _interopRequireDefault(require("../swagger/index"));

var router = _express["default"].Router();

var specs = (0, _swaggerJsdoc["default"])(_index["default"]);
router.use('/docs', _swaggerUiExpress["default"].serve);
router.get('/docs', _swaggerUiExpress["default"].setup(specs, {
  explorer: true
}));
var _default = router;
exports["default"] = _default;