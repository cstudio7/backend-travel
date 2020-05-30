"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _path = _interopRequireDefault(require("path"));

var _cors = _interopRequireDefault(require("cors"));

var _swagger = _interopRequireDefault(require("./routes/swagger"));

var _index = _interopRequireDefault(require("./routes/index"));

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use('/static', _express["default"]["static"](_path["default"].join(__dirname, 'public')));
app.use('/api/v1', _swagger["default"], _index["default"]);
app.get('/', function (req, res) {
  return res.status(200).send({
    status: 200,
    message: 'Welcome to Air Peace!'
  });
});
var _default = app;
exports["default"] = _default;