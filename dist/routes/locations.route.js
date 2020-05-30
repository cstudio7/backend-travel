"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _verifyToken = _interopRequireDefault(require("../middlewares/verify.token.middleware"));

var _lacations = _interopRequireDefault(require("../controllers/lacations.controller"));

var router = _express["default"].Router();
/**
 * @swagger
 *
 * /most-travelled:
 *    get:
 *      summary: Get most traveled locations
 *      tags: [Locations]
 *      parameters:
 *       - name: token
 *         in: header
 *         description: Check token authentication
 *         required: true
 *         type: string
 *      responses:
 *        "200":
 *          description: Most traveled locations
 *      components:
 *          schemas:
 *            location:
 *              type: object
 *              required:
 *                - city
 *                - travelledTimes
 *              properties:
 *                city:
 *                  type: string
 *                travelledTimes:
 *                  type: intiger
 */


router.get('/most-travelled', _verifyToken["default"].headerToken, _lacations["default"].getMostTraveledLocations);
router.get('/', _verifyToken["default"].headerToken, _lacations["default"].getSupportedLocations);
var _default = router;
exports["default"] = _default;