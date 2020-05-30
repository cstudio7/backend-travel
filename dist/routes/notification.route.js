"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _verifyToken = _interopRequireDefault(require("../middlewares/verify.token.middleware"));

var _notification = _interopRequireDefault(require("../controllers/notification.controller"));

var _validate = _interopRequireDefault(require("../helpers/validate.helper"));

var _validate2 = _interopRequireDefault(require("../middlewares/validate.middleware"));

var router = _express["default"].Router();
/**
 * @swagger
 *
 * /:
 *    get:
 *      summary: Get notifications for a logged in user
 *      tags: [Notification]
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
 *              $ref: '#/components/schemas/notifications'
 *      responses:
 *        "201":
 *          description: user's notifications
 */


router.get('/', _verifyToken["default"].headerToken, _notification["default"].getUserNotifications);
/**
 * @swagger
 *
 * /notifications/1:
 *  get:
 *    tags:
 *      - Users
 *    summary: get a notification
 *    produces:
 *      - application/json
 *    parameters:
 *       - name: token
 *         in: header
 *         description: Check token authentication
 *         required: true
 *         type: string
 *    responses:
 *      '200':
 *        description: successful operation
 * */

router.get('/:id', _verifyToken["default"].headerToken, _notification["default"].getNotificationById);
/**
 * @swagger
 *
 * /notifications/changePreference:
 *    patch:
 *      summary: User can change notification preference
 *      tags: [Notification]
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
 *              $ref: '#/components/schemas/User preference'
 *      responses:
 *        "201":
 *          description: Notification preference
 *
 * components:
 *    schemas:
 *      User preference:
 *        type: object
 *        required:
 *          - appNotification
 *          - emailNotification
 *        properties:
 *          appNotification:
 *            type: string
 *          emailNotification:
 *            type: string
 */

router.patch('/changePreference', _validate["default"].userPreference(), _validate2["default"], _verifyToken["default"].headerToken, _notification["default"].changePreference);
/**
 * @swagger
 *
 * /notifications:
 *    patch:
 *      summary: Mark all notifications as read
 *      tags: [Notification]
 *      parameters:
 *       - name: token
 *         in: header
 *         description: Check authentication
 *         required: true
 *         type: string
 *      responses:
 *        "200":
 *          description: Successfully marked all notifications as read.
 */

router.patch('/', _validate["default"].validateOnUpdateNotification(), _validate2["default"], _verifyToken["default"].headerToken, _notification["default"].updateNotificationsStatus);
/**
 * @swagger
 *
 * /notifications/{id}:
 *    patch:
 *      summary: Mark a notification as read
 *      tags: [Notification]
 *      parameters:
 *       - name: token
 *         in: header
 *         description: Check authentication
 *         required: true
 *         type: string
 *       - name: id
 *         in: path
 *         description: Notification id
 *         required: true
 *         type: string
 *      responses:
 *        "200":
 *          description: Successfully marked a notification as read.
 */

router.patch('/:notificationID', _validate["default"].validateOnUpdateNotification(), _validate2["default"], _verifyToken["default"].headerToken, _notification["default"].updateNotificationStatus);
var _default = router;
exports["default"] = _default;