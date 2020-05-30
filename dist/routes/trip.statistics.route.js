"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _verifyToken = _interopRequireDefault(require("../middlewares/verify.token.middleware"));

var _verifyUser = _interopRequireDefault(require("../middlewares/verify.user.middleware"));

var _trip = _interopRequireDefault(require("../controllers/trip.controller"));

var router = _express["default"].Router();
/**
 * @swagger
 *
 * /trip-statistics:
 *    get:
 *      summary: user and manager can search
 *      tags: [statistics]
 *      parameters:
 *       - name: token
 *         in: header
 *         description: Check token authentication
 *         required: true
 *         type: string
 *       - name: startDate
 *         in: query
 *         description: query to search for
 *         required: true
 *         type: string
 *      responses:
 *        "200":
 *          description: Search record schema
 */


router.get('/trip-statistics', _verifyToken["default"].headerToken, _verifyUser["default"], _trip["default"].getTripStatistics);
var _default = router;
exports["default"] = _default;