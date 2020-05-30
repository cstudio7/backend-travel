"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _accomodation = _interopRequireDefault(require("../controllers/accomodation.controller"));

var _verifyUser = _interopRequireDefault(require("../middlewares/verify.user.middleware"));

var _verifyToken = _interopRequireDefault(require("../middlewares/verify.token.middleware"));

var _accomodation2 = _interopRequireDefault(require("../middlewares/accomodation.middleware"));

var router = _express["default"].Router();
/**
 * @swagger
 *
 * /accomodationType:
 *    get:
 *      summary: Trip-administration can get all accommodation types
 *      tags: [Accommodations]
 *      parameters:
 *       - name: token
 *         in: header
 *         description: Check token authentication
 *         required: true
 *         type: string
 *      requestBody:
 *        required: true
 *        content:
 *      responses:
 *        "201":
 *          description: accomodation schema
 */


router.get('/', _verifyToken["default"].headerToken, _verifyUser["default"], _accomodation2["default"].checkIfRequesterIsAdmin, _accomodation["default"].getAllAccommodationTypes);
/**
 * @swagger
 *
 * /accomodationType/id:
 *    get:
 *      summary: Get accommodation rooms type
 *      tags: [Accommodations]
 *      parameters:
 *       - name: token
 *         in: header
 *         description: Check token authentication
 *         required: true
 *         type: string
 *      requestBody:
 *        required: true
 *        content:
 *      responses:
 *        "200":
 *          description: accomodation schema
 */

router.get('/:accommodationId', _verifyToken["default"].headerToken, _verifyUser["default"], _accomodation["default"].getAccomodationRoomsType);
var _default = router;
exports["default"] = _default;