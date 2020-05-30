"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _trip = _interopRequireDefault(require("../controllers/trip.controller"));

var _verifyToken = _interopRequireDefault(require("../middlewares/verify.token.middleware"));

var _commentValidation = _interopRequireDefault(require("../middlewares/comment.validation.middleware"));

var _request = _interopRequireDefault(require("../middlewares/request.middleware"));

var _verifyUser = _interopRequireDefault(require("../middlewares/verify.user.middleware"));

var _verifyManager = _interopRequireDefault(require("../middlewares/verify.manager.middleware"));

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
 * /trip/requests/:page:
 *    get:
 *      summary: Manager get request made by his
 *      tags: [Trips]
 *      parameters:
 *      responses:
 *       200:
 *         description: "Successful operation"
 *       400:
 *         description: "Bad request"
 *       401:
 *         description: "Unauthorized"
 *       409:
 *         description: "Conflict"
 *
 * */


router.get('/', _verifyToken["default"].headerToken, _verifyUser["default"], _verifyManager["default"].verifyManager, _trip["default"].getTripRequestsByManager);
/**
 * @swagger
 *
 * /trip/trip-requests/{tripRequestId}:
 *    patch:
 *      summary: Manager can approve or reject
 *      tags: [Trips]
 *      parameters:
 *       - name: tripRequestId
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
 *              $ref: '#/components/schemas/status'
 *      responses:
 *        "200":
 *           description: trip request schema
 *
 * components:
 *    schemas:
 *      status:
 *        type: object
 *        required:
 *          - status
 *        properties:
 *          status:
 *            type: string
 *
 */

router.patch('/:tripRequestId', _verifyToken["default"].headerToken, _verifyUser["default"], _request["default"].checkIfUserIsManager, _request["default"].checkIfRequestFound, _request["default"].checkIfUsersManager, _request["default"].checkIfBodyIsValid, _request["default"].checkIfAlreadyChanged, _trip["default"].updateTripRequestStatus);
/**
 * @swagger
 *
 * /trip-requests/{tripRequestID}/{autorizations}:
 *    get:
 *      summary: user can get a specific trip request
 *      tags: [Trips]
 *      parameters:
 *       - name: tripRequestID
 *         in: path
 *         description: get a specific trip request
 *         required: true
 *         type: string
 *       - name: tripRequestID
 *         in: path
 *         description: get a specific trip request
 *         required: true
 *         type: string
 *      responses:
 *        "200":
 *           description: trip request schema
 *
 */

router.get('/:subjectID/:autorizations', _verifyToken["default"].paramToken, _commentValidation["default"].validateUserAndSubjectRelationships, _trip["default"].getTripRequest);
/**
 * @swagger
 *
 * /trip-requests/{tripRequestId}:
 *    patch:
 *      summary: Manager can approve or reject
 *      tags: [Trips]
 *      parameters:
 *       - name: tripRequestId
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
 *              $ref: '#/components/schemas/status'
 *      responses:
 *        "200":
 *           description: trip request schema
 *
 * components:
 *    schemas:
 *      status:
 *        type: object
 *        required:
 *          - status
 *        properties:
 *          status:
 *            type: string
 *
 */

router.patch('/:tripRequestId', _verifyToken["default"].headerToken, _verifyUser["default"], _request["default"].checkIfUserIsManager, _request["default"].checkIfRequestFound, _request["default"].checkIfUsersManager, _request["default"].checkIfBodyIsValid, _request["default"].checkIfAlreadyChanged, _trip["default"].updateTripRequestStatus);
var _default = router;
exports["default"] = _default;