"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _trip = _interopRequireDefault(require("../controllers/trip.controller"));

var _verifyToken = _interopRequireDefault(require("../middlewares/verify.token.middleware"));

var router = (0, _express.Router)();
/**
 * @swagger
 * /trip-requests/search:
 *    get:
 *      summary: user and manager can search for a trip request
 *      tags: [search]
 *      parameters:
 *       - name: token
 *         in: header
 *         description: Check token authentication
 *         required: true
 *         type: string
 *       - name: keyword
 *         in: query
 *         description: query to search for
 *         required: true
 *         type: string
 *       - name: page
 *         in: query
 *         schema:
 *           type: integer
 *         description: page number
 *         required: true
 *       - name: limit
 *         in: query
 *         schema:
 *           type: integer
 *         description: limit number
 *         required: true
 *      responses:
 *        "200":
 *          description: Search record schema
 */

router.get('/search', _verifyToken["default"].headerToken, _trip["default"].search);
var _default = router;
exports["default"] = _default;