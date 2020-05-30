"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("./user.route"));

var _trip = _interopRequireDefault(require("./trip.route"));

var _tripStatistics = _interopRequireDefault(require("./trip.statistics.route"));

var _search = _interopRequireDefault(require("./search.route"));

var _userSettings = _interopRequireDefault(require("./user.settings.route"));

var _notification = _interopRequireDefault(require("./notification.route"));

var _chat = _interopRequireDefault(require("./chat.route"));

var _comment = _interopRequireDefault(require("./comment.routes"));

var _tripRequests = _interopRequireDefault(require("./trip-requests.route"));

var _accommodation = _interopRequireDefault(require("./accommodation.route"));

var _locations = _interopRequireDefault(require("./locations.route"));

var _userManagement = _interopRequireDefault(require("./user-management.route"));

var _accommodationType = _interopRequireDefault(require("./accommodation-type.route"));

var Router = _express["default"].Router();

Router.use('/auth', _user["default"]);
Router.use('/trips', _trip["default"]);
Router.use('/', _tripStatistics["default"]);
Router.use('/messages', _chat["default"]);
Router.use('/users', _userSettings["default"]);
Router.use('/user-managements', _userManagement["default"]);
Router.use('/notifications', _notification["default"]);
Router.use('/trip-requests', _search["default"], _comment["default"], _tripRequests["default"]);
Router.use('/accommodations', _accommodation["default"]);
Router.use('/accommodationType', _accommodationType["default"]);
Router.use('/locations', _locations["default"]);
Router.use('/trip-requests', _comment["default"], _tripRequests["default"], _search["default"]);
var _default = Router;
exports["default"] = _default;