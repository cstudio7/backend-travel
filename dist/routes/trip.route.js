"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _trip = _interopRequireDefault(require("../controllers/trip.controller"));

var _verifyToken = _interopRequireDefault(require("../middlewares/verify.token.middleware"));

var _verifyUser = _interopRequireDefault(require("../middlewares/verify.user.middleware"));

var _validate = _interopRequireDefault(require("../helpers/validate.helper"));

var _validate2 = _interopRequireDefault(require("../middlewares/validate.middleware"));

var _trip2 = _interopRequireDefault(require("../middlewares/trip.middleware"));

var _accomodation = _interopRequireDefault(require("../middlewares/accomodation.middleware"));

var router = _express["default"].Router();
/**
 * @swagger
 * tags:
 *   name: Trips
 *   description: Trips activities
 */

/**
 * @swagger
 *
 * /trip:
 *    post:
 *      summary: User can request a trip
 *      tags: [Trips]
 *      parameters:
 *       - name: token
 *         in: header
 *         description: Check token authentication
 *         required: true
 *         type: string
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/tripRequest'
 *      responses:
 *        "201":
 *          description: trips schema
 *
 * components:
 *    schemas:
 *      tripRequest:
 *        type: object
 *        required:
 *          - From
 *          - To
 *          - departureDate
 *          - accomodationId
 *        properties:
 *          From:
 *            type: integer
 *          To:
 *            type: integer
 *          departureDate:
 *            type: string
 *          accomodationId:
 *            type: integer
 */


router.post('/', _validate["default"].tripsValidation(), _validate2["default"], _verifyToken["default"].headerToken, _verifyUser["default"], _trip2["default"].checkIfDateisValid, _trip2["default"].checkLocations, _accomodation["default"].findAccommodationByCity, _trip2["default"].checkTripExist, _trip2["default"].multiCityDataValidation, _trip["default"].combineTripsConctroller);
/**
 * @swagger
 *
 * /trips/my-trip-requests:
 *   get:
 *     summary: User can see all requests he/she submitted to barefoot nomad
 *     tags: [Trips]
 *     description: All User Requests
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         in: header
 *         description: Check token authentication
 *         required: true
 *         type: string
 *       - name: page
 *         in: path
 *         description: page number
 *         required: true
 *         type: string
 *     responses:
 *        "201":
 *          description: trips schema
 *
 */

router.get('/my-trip-requests', _verifyToken["default"].headerToken, _verifyUser["default"], _trip["default"].getTripRequestsByUser);
/**
 * @swagger
 *
 * /trips/{tripId}:
 *    patch:
 *      summary: user should be able to edit trip
 *      tags: [Trips]
 *      parameters:
 *       - name: tripId
 *         in: path
 *         description: Update that specific request
 *         required: true
 *         type: string
 *       - name: token
 *         in: header
 *         description: Check token authentication
 *         required: true
 *         type: string
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/tripRequest'
 *      responses:
 *        "200":
 *           description: trip request schema
 *
 * components:
 *    schemas:
 *      tripRequest:
 *        type: object
 *        required:
 *          - From
 *          - To
 *          - departureDate
 *          - accomodationId
 *        properties:
 *          From:
 *            type: integer
 *          To:
 *            type: integer
 *          departureDate:
 *            type: string
 *          accomodationId:
 *            type: integer
 */

router.patch('/:tripId', _validate["default"].tripsValidation(), _validate2["default"], _verifyToken["default"].headerToken, _verifyUser["default"], _trip2["default"].checkTripRequestStatus, _trip2["default"].checkIfDateisValid, _trip2["default"].checkLocations, _accomodation["default"].findAccommodationByCity, _trip2["default"].multiCityDataValidation, _trip["default"].redirectTripFunctionsByType); // swagger

router.get('/trip-statistics', _verifyToken["default"].headerToken, _verifyUser["default"], _trip["default"].getTripStatistics);
var _default = router;
exports["default"] = _default;